import "./RootFormLayout.css"

// Library/Component imports here
import { Outlet } from "react-router";

const RootFormLayout = () => {
    return (
        <div className="form__bg">
            <div className="form">
                <div className="form__container">
                    <aside className="progress_bar" role="progressbar" aria-label="Step Progress">
                        <picture className="bg__picture">
                            <source srcSet="src/assets/images/bg-sidebar-mobile.svg" media="(max-width: 500px)"/>
                            <img src="src/assets/images/bg-sidebar-desktop.svg" alt="side bar background image" />
                        </picture>

                        <ul className="list__info">
                            <li className="step__1" aria-current="step">
                                <span className="step-number">1</span>
                                <div className="step-content">
                                    <span className="step-label">STEP 1</span>
                                    <h2 className="step-title">YOUR INFO</h2>
                                </div>
                            </li>
                            <li className="step__2">
                                <span className="step-number">2</span>
                                <div className="step-content">
                                    <span className="step-label">STEP 2</span>
                                    <h2 className="step-title">SELECT PLAN</h2>
                                </div>
                            </li>
                            <li className="step__2">
                                <span className="step-number">3</span>
                                <div className="step-content">
                                    <span className="step-label">STEP 3</span>
                                    <h2 className="step-title">ADD-ONS</h2>
                                </div>
                            </li>
                            <li className="step__2">
                                <span className="step-number">4</span>
                                <div className="step-content">
                                    <span className="step-label">STEP 4</span>
                                    <h2 className="step-title">SUMMARY</h2>
                                </div>
                            </li>
                        </ul>
                    </aside>

                    <main className="form-content">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default RootFormLayout;