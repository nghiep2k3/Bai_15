import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const MyForm = () => (
  <Formik
    initialValues={{
      to: '',
      subject: '',
      message: '',
      attachments: []
    }}
    validationSchema={Yup.object({
      to: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      subject: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
      message: Yup.string()
        .min(10, 'Must be at least 10 characters')
        .required('Required')
    })}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {formik => (
      <Form>
        <div>
          <label htmlFor="to">To</label>
          <Field name="to" type="email" />
          <ErrorMessage name="to" />
        </div>

        <div>
          <label htmlFor="subject">Subject</label>
          <Field name="subject" />
          <ErrorMessage name="subject" />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <Field name="message" as="textarea" />
          <ErrorMessage name="message" />
        </div>

        <div>
          <label htmlFor="attachments">Attachments</label>
          <input
            id="attachments"
            name="attachments"
            type="file"
            multiple
            onChange={event => {
              formik.setFieldValue("attachments", event.currentTarget.files);
            }}
          />
          <ErrorMessage name="attachments" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    )}
  </Formik>
);

export default MyForm;