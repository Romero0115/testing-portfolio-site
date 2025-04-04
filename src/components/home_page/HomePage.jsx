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
                <img src="/media/software-testing.png" alt="" />
            </div>
            <section id="section1">
                <article>
                    <h2>{t("section1.title")}</h2>
                    <p>{t("section1.description")}</p>
                    <p>{t("section1.disclaimer")}</p>
                </article>
            </section>
            <div>
                <section id="section2">
                    <article>
                        <h2>"{t("section2.title")}"</h2>
                        <a href="https://www.linkedin.com/in/matias-romero-qa-testing/">{t("section2.linkedIn")}</a>
                    </article>
                </section>
                <section id="section3">
                    <article>
                        <h2>{t("section3.title")}</h2>
                        <a href="mailto:matiasrome99.psi@gmail.com">matiasrome99.psi@gmail.com</a>
                        <a href="https://wa.me/59898158233">+598 98158233</a>
                        <p>Uruguay</p>
                    </article>
                </section>
            </div>
        </main>
    );
};

export default HomePage;