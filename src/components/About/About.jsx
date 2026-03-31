import React from 'react'
import './about.css'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'

const About = () => {
  return (
    <div className="about">
      <Header />

      <div className="middle-area">
        <h2>About Us</h2>

        <hr />

      <p>A hospital is a healthcare institution providing patient treatment with specialized health science and auxiliary healthcare staff and
           medical equipment.[1] The best-known type of hospital is the general hospital, which typically has an emergency department to treat urgent
          health problems ranging from fire and accident victims to a sudden illness. A district hospital typically is the major health care facility
          in its region, with many beds for intensive care and additional beds for patients who need long-term care.

        <p>Specialized hospitals include trauma centers, rehabilitation hospitals, children's hospitals, geriatric hospitals, and hospitals for 
          specific medical needs, such as psychiatric hospitals for psychiatric treatment and other disease-specific categories. Specialized 
          hospitals can help reduce health care costs compared to general hospitals.[2] Hospitals are classified as general, specialty, or 
          government depending on the sources of income received.</p>

        <p>A teaching hospital campus combines patient care with teaching to health science students, auxiliary healthcare students, and qualified 
          medical graduates completing their postgraduate residencies before licensure to practice. A health science facility smaller than a 
          hospital is generally called a clinic. Hospitals have a range of departments (e.g. surgery and urgent care) and specialist units such as 
          cardiology. Some hospitals have outpatient departments and some have chronic treatment units. Common support units include a pharmacy, 
          pathology, and radiology. Facilities that combine many health care functions, including general or specialized patient care, teaching,
          research, and so on, may use the term medical center. This term can also refer to an office complex with various unaffiliated health 
          services or any kind of clinic or hospital.</p>
        </p>

        <h2>Our Facilities</h2>

        <div className="about-middle">
          <div className="about-middle-left">
            <h1>1. Blood Banks</h1>
            <p>Blood banks allow donors to donate blood and platelets while also storing and sorting blood into components that can be used most effectively by patients.
              “Red blood cells carry oxygen, platelets help the blood clot and plasma has specific proteins that allows proper regulation of coagulation and healing,” writes the American Society of Hematology. Sometimes patients need these particular components specifically, and sometimes they just need lots of blood. For example, a single car accident victim could require as many as 100 pints of blood.
              Blood is essential for human life, and it can’t be manufactured—only donated. So these facilities work to build the supply for patients who need it.
            </p>

            <div className="about-middle-right">
              <img src="./Images/blood-bank-img-1.jpg" alt="" />
              
            </div>

            <h1>2. Birth Centers</h1>
            <p>A birth center is a healthcare facility for childbirth that focuses on the midwifery model, according to the American Association of Birth Centers. They aim to create a birth environment that feels more comfortable to the mother and allows for a cost-effective, family-inclusive birth.
              Birth centers are not typically equipped with the same contingency equipment and staff as a hospital, such as surgeons in case of a C-section or a neonatal intensive care unit. As a result, birth centers accommodate only healthy pregnancies without any known risk or complication factors.
              These facilities are guided by principles of prevention, sensitivity, safety, cost-effectiveness and appropriate medical intervention when needed.
            </p>
            <div className="about-middle-right">
              <img src="./Images/birth_center.jpg" alt="" />
              
            </div>

            <h1>3. Clinics and medical offices</h1>
            <p>The definition of a clinic is “a facility for diagnosis and treatment of outpatients.” There are many healthcare facilities that fit that definition across a wide variety of treatment specialties.
              Many people go to a clinic for routine doctor’s appointments and checkups. These healthcare facilities can be a physician’s private practice, a group practice setting or a corporately owned clinic that may be connected to a larger healthcare system or hospital.
              Clinics cover a lot of ground in healthcare. For example, you could visit a dental clinic to have a toothache investigated, a physical therapy clinic to recover from an athletic injury or a pediatric speech therapy clinic to help your child overcome an articulation disorder.
            </p>

            <div className="about-middle-right">
              <img src="./Images/medical_clinic.jpg" alt="" />
              
            </div>

            <h1>4. Urgent Care</h1>
            <p>Urgent care (UR) facilities exist for on-demand healthcare needs that aren’t severe enough for the emergency room, but are too severe or concerning to wait for a scheduled appointment at the doctor’s office. Urgent care is a common choice when children get sick, for example, and need an immediate diagnosis or relief from symptoms.
              Providers in the UR are experts in acute care. They can set broken bones and treat limb fractures; diagnose a viral illness; run strep tests, blood tests and urine labs and provide treatment for injuries. If a problem is too severe, then urgent care practitioners will call an ambulance or refer patients to a hospital or specialist.
            </p>

            <div className="about-middle-right">
              <img src="./Images/urgent_care.jpg" alt="" />
              
            </div>
          </div>
        </div>
      </div>




      <div className="end-container">
        <Footer />
      </div>
    </div>
  )
}

export default About
