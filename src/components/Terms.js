import React from "react";
import "../resources/css/Statement.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUniversalAccess } from "@fortawesome/free-solid-svg-icons";

function Terms() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        Account Terms <FontAwesomeIcon icon={faUniversalAccess} />
      </h1>
      <div>
        <ol className="list-decimal p-4 terms">
          <li> You must be 13 years or older to use this Service. </li>
          <li>
            You must be a human. Accounts registered by "bots" or other
            automated methods are not permitted.{" "}
          </li>
          <li>
            You must provide your name, a valid email address, and any other
            information requested in order to complete the registration process.{" "}
          </li>
          <li>
            Your login may only be used by one person - i.e., a single login may
            not be shared by multiple people - except that a machine user's
            actions may be directed by multiple people.{" "}
          </li>
          <li>
            You are responsible for maintaining the security of your account and
            password. Font Awesome cannot and will not be liable for any loss or
            damage from your failure to comply with this security obligation.
          </li>
          <li>
            You are responsible for all activity that occurs under your account.{" "}
          </li>
          <li>
            One person or legal entity may not maintain more than one free
            account, and one machine user account that is used exclusively for
            performing automated tasks.
          </li>
          <li>
            You may not use the Service for any illegal or unauthorized purpose.
            You must not, in the use of the Service, violate any laws in your
            jurisdiction (including but not limited to copyright or trademark
            laws).{" "}
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Terms;
