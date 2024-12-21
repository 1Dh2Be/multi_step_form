import "./FormConfirmation.css"


const FormConfirmation = () => {
    return (
        <section className="confirmation__wrapper">
            <div className="confirmation__wrapper--container">
                <div className="confirmation__wrapper--content">
                    <header className="confirmation__wrapper--header">
                        <div className="confirmation__content--image">
                            <img className="confirmation__img" src="src/assets/images/icon-thank-you.svg" alt="Confirmation icon" />
                        </div>
                        <h1 className="confirmation__wrapper--title">Thank you!</h1>
                        <p className="confirmation__wrapper--description">
                            Thanks for confirming your subscription! We hope you have fun using our platform.
                            If you ever need support, please feel free to email us at support@loremgaming.com.
                        </p>
                    </header>
                </div>
            </div>
        </section>
    )
}

export default FormConfirmation


// return (
//     <div className="confirmation__content">
//         <div className="confirmation__content--image">
//             <img className="confirmation__img" src="src/assets/images/icon-thank-you.svg" alt="Confirmation icon" />
//         </div>
//         <h1>Thank You</h1>
//         <p>
//             Thanks for confirming your subscription! We hope you have fun using our platform.
//             If you ever need support, please feel free to email us at support@loremgaming.com.
//         </p>
//     </div>
// )