// FormStep1.jsx
import "./FormStep1.css"
import { Formik, Form } from "formik"

const FormStep1 = () => {
  return (
    <section className="formik__form">
      <div className="formik__container">
        <div className="formik__wrapper">
          <header>
            <h1 className="formik__wrapper--h1">Personal info</h1>
            <p className="formik__wrapper--p">
              Please provide your name, email address, and phone number.
            </p>
          </header>

          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
            }}
          >
            {() => (
              <Form className="form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Mimoun"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="e.g. mimoun123@gmail.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="e.g. +32 123 45 67 89"
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <div className="form__btn">
        <button className="next__step--btn">Next Step</button>
      </div>
    </section>
  )
}

export default FormStep1