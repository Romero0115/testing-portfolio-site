import React, { useEffect } from "react";
import './homePage.css';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HomePage = () => {
    const { t } = useTranslation("homePage");
    const logged = useSelector(state => state.logger.isLogged);
    const navigate = useNavigate();

    useEffect(() => {
        if (!logged) {
            navigate('/');
        }
    }, [logged, navigate]);

    return (
        <main>
            <div>
                <img src="/media/software-testing.png" alt="Site banner" />
            </div>
            <section id="section1">
                <article>
                    <h2>{t("section1.title")}</h2>
                    <p>{t("section1.description")}</p>
                </article>
            </section>
            <div>
                <img src="/media/profile-picture.png" alt="Profile foto" />
            </div>
            <div>
                <section id="section2">
                    <article>
                        <h2>"{t("section2.title")}"</h2>
                        <div>
                            <a href="https://www.linkedin.com/in/matias-romero-qa-testing/">{t("section2.linkedIn")}</a>
                            <a href="https://github.com/Romero0115">{t("section2.gitHub")}</a>
                        </div>
                    </article>
                </section>
                <section id="section3">
                    <article>
                        <h2>{t("section3.title")}</h2>
                        <ul>
                            <li>
                                <label>{t("section3.mailLabel")} </label><a href="mailto:matiasrome99.psi@gmail.com">matiasrome99.psi@gmail.com</a>
                            </li>
                            <li>
                                <label>{t("section3.phoneLabel")} </label><a href="https://wa.me/59898158233">+598 98158233</a>
                            </li>
                        </ul>
                        <p>Uruguay</p>
                        <div>
                            <img src="/media/location-icon.png" alt="Location icon" />
                        </div>
                    </article>
                </section>
            </div>
        </main>
    );
};

export default HomePage;