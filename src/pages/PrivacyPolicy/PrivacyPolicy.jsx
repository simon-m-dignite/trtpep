import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="horizontal-padding pt-60 pb-20">
      <h1 className="text-3xl font-bold text-center mb-5">Privacy Policy</h1>

      <div className="w-full flex flex-col items-start gap-4 mt-6">
        <h2 className="font-bold text-xl">NOTICE OF PRIVACY PRACTICES</h2>
        <p>
          This notice explains how your health and medical information may be
          used, disclosed, and how you can access this information. Please
          review carefully. Protecting your privacy is a priority for us.
        </p>

        <h2 className="font-bold text-xl">OUR COMMITMENT TO PRIVACY</h2>
        <p>
          At TRTPEP, we value the confidentiality of your health and medical
          information. Federal and state laws require us to maintain the privacy
          of this information. We are obligated to provide this Notice outlining
          our privacy practices, legal duties, and your rights. We must adhere
          to the privacy practices as stated in this Notice, which is effective
          as of 09/19/2019, until it is revised or replaced. If a breach of your
          information occurs, we will notify you promptly. We reserve the right
          to modify our privacy practices and the terms of this Notice at any
          time, in compliance with applicable laws. Changes will apply to all
          health information, both existing and future. Before significant
          updates take place, a revised Notice will be made available upon
          request. You can request a copy of this Notice anytime by contacting
          us using the details at the end.
        </p>

        <h2 className="font-bold text-xl">
          HOW YOUR HEALTH INFORMATION MAY BE USED AND DISCLOSED
        </h2>
        <ul className="list-disc px-4 flex flex-col items-start gap-2">
          <li>
            <span className="font-semibold">Consultation Purposes:</span> We may
            share your health information with healthcare providers involved in
            your care.
          </li>
          <li>
            <span className="font-semibold">Billing and Payment:</span> Your
            health information may be used to process payments for the services
            provided.
          </li>
          <li>
            <span className="font-semibold">Healthcare Operations:</span> We may
            use your information for activities like quality assessment,
            accreditation, credentialing, and staff training.
          </li>
        </ul>

        <h2 className="font-bold text-xl">WITH YOUR AUTHORIZATION</h2>
        <p>
          Beyond consultation, payment, or operational purposes, we need your
          written consent to use or share your health information. You can
          revoke your authorization in writing at any time, but this will not
          affect any prior disclosures made while your authorization was in
          effect.
        </p>

        <h2 className="font-bold text-xl">FAMILY AND FRIENDS</h2>
        <p>
          We may share your health information with family, friends, or others
          involved in your care or payment, but only with your agreement.
        </p>

        <h2 className="font-bold text-xl">NOTIFICATION</h2>
        <p>
          We may use your information to notify your family, personal
          representative, or others involved in your care about your location,
          general condition, or passing, unless you object.
        </p>

        <h2 className="font-bold text-xl">MARKETING</h2>
        <p>
          We will not use your health information for marketing purposes without
          your express written permission.
        </p>

        <h2 className="font-bold text-xl">LEGAL OBLIGATIONS</h2>
        <p>
          We may disclose your health information when required by law,
          including compliance checks from the Department of Health and Human
          Services.
        </p>

        <h2 className="font-bold text-xl">NATIONAL SECURITY</h2>
        <p>
          We may release information to military authorities for service members
          or to federal officials for lawful intelligence, national security
          activities, or to law enforcement for custody of inmates.
        </p>

        <h2 className="font-bold text-xl">LEGAL ACTIONS</h2>
        <p>
          We may disclose your information in response to court orders or
          subpoenas.
        </p>

        <h2 className="font-bold text-xl">APPOINTMENT REMINDERS</h2>
        <p>
          We may contact you with reminders via voicemail, text, mail, or other
          methods.
        </p>

        <h2 className="font-bold text-xl">YOUR RIGHTS AS A PATIENT</h2>
        <ul className="list-disc px-4 flex flex-col items-start gap-2">
          <li>
            <span className="font-semibold">Access:</span> You have the right to
            view or obtain copies of your health records, with some exceptions.
            You may request the format in which you want these copies, and we
            will try to comply if practical. You can submit a written request to
            access your records. We may charge a reasonable fee for copying,
            mailing, or formatting your records.
          </li>
          <li>
            <span className="font-semibold">Restrictions:</span> You can request
            restrictions on how we use or share your health information, but we
            are not required to agree to such restrictions unless we choose to.
          </li>
          <li>
            <span className="font-semibold">Confidential Communications:</span>{" "}
            You may request that we communicate with you through alternate
            methods or locations. These requests must be made in writing and
            include details on how payment will be handled.
          </li>
          <li>
            <span className="font-semibold">Amendments:</span> If you believe
            your health information is incorrect or incomplete, you can request
            an amendment in writing. We may deny your request under certain
            circumstances.
          </li>
          <li>
            <span className="font-semibold">Electronic Notices:</span> If you
            access this Notice online or via email, you are still entitled to a
            paper copy upon request.
          </li>
        </ul>

        <h2 className="font-bold text-xl">QUESTIONS AND COMPLAINTS</h2>
        <p>
          If you have concerns about our privacy practices or feel your privacy
          rights have been violated, please contact us directly. You can also
          file a complaint with the U.S. Department of Health and Human
          Services. Filing a complaint will not lead to retaliation from us.
        </p>

        <h2 className="font-bold text-xl">Contact:</h2>
        <Link to="mailto:info@TRTPEP.com" className="text-blue-600 underline">
          info@TRTPEP.com
        </Link>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
