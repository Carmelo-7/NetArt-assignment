function About(){
    return (
        <section className="align-items-center px-sm-5 px-3 d-lg-flex">
            <div className="award-trophy-img w-50 mx-auto">
                <img src="./img/1.png" alt="award-trophy" />
            </div>
            <div className="achievements d-lg-flex flex-column align-items-center align-items-lg-start mt-sm-5">
                <p className="text-sm-center text-center text-lg-start fw-bold">C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
                <ul className="ms-2">
                    <li className="my-1">C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                    <li className="my-1">C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                </ul>
                <div className="my-4 text-center">
                    <img src="./img/2.png" alt="trophy-presentaion" />
                </div>
                <p className="ms-md-5">Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
            </div>
        </section>
    )
}

export default About;