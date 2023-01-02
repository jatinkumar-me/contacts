import { Form, useLoaderData, useNavigate, redirect } from "react-router-dom";
import { updateContact } from "../contacts";

export async function action({ request, params }) {
   const formData = await request.formData();
   console.log(Array.from(formData));
   const updates = Object.fromEntries(formData);
   await updateContact(params.contactId, updates);
   return redirect(`/contacts/${params.contactId}`);
}

const EditContact = () => {
   const contact = useLoaderData();
   const navigate = useNavigate();
   return (
      <Form method="post" id="contact-form">
         <p>
            <span>Name</span>
            <input
               type="text"
               placeholder="First"
               aria-label="First name"
               name="first"
               defaultValue={contact.first}
            />
            <input
               type="text"
               placeholder="Last"
               aria-label="Last name"
               name="last"
               defaultValue={contact.last}
            />
         </p>
         <label>
            <span>Twitter</span>
            <input
               type="text"
               placeholder="@jack"
               name="twitter"
               defaultValue={contact.twitter}
            />
         </label>
         <label>
            <span>Avatar URL</span>
            <input
               type="text"
               placeholder="https://example.com/avatar.jpg"
               name="avatar"
               defaultValue={contact.avatar}
            />
         </label>
         <label>
            <span>Notes</span>
            <textarea
               name="notes"
               id="notes"
               defaultValue={contact.notes}
               rows={6}
            />
         </label>
         <p>
            <button type="submit">Save</button>
            <button type="button" onClick={() => {navigate(-1)}}>Cancel</button>
         </p>
      </Form>
   );
};
export default EditContact;
