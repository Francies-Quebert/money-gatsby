import axios from "axios";
import React, { useState } from "react";

const JoinOurTeam = (props) => {
  // console.log(props,"props")
  const initialValues = {
    FirstName: "",
    LastName: "",
    PhoneNumber: "",
    DateOfBirth: "",
    Email: "",
    Address: "",
    CoverLetter: "",
    Work: "",
    Acheviement: "",
    Role: "",
  };
  const [login, setLogin] = useState(initialValues);
  const onFinish = () => {
    let data = {
      FirstName: login.FirstName,
      LastName: login.LastName,
      PhoneNumber: login.PhoneNumber,
      DateOfBirth: login.DateOfBirth,
      Email: login.Email,
      Address: login.Address,
      CoverLetter: login.CoverLetter,
      Work: login.Work,
      Acheviement: login.Acheviement,
      Role: login.Role,
    };
    // console.log(data);
    axios
      .post("http://192.168.0.109:4002/navbar/moneyTickSaveSheet", {
        data: data,
      })
      .then((response) => {
        if (response.status === 201) {
          // navigate(`/thank-you?form=${"feedback"}`);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
    setLogin(initialValues);
    // setIsSave(!isSave);
  };
  return (
    <>
      <div className="max-w-6xl mx-auto py-10 px-3.5">
        <h1 className="text-center text-4xl text-secondary-orange-400 font-bold mb-4 uppercase">
          {props.carrers_form_title_highlighted}
        </h1>
        <div className="border-t-8 border-white pb-4 w-40 max-w-full mx-auto"></div>
        <div className="text-center text-2xl text-white mb-8">
          {props.carrers_form_short_desc}
        </div>
        <p className="text-lg text-white text-center">
          {props.carrers_form_desc}
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="text-white flex flex-col lg:flex-row">
          <div className="flex-1">
            <form className="space-y-5 lg:mx-28 mx-6 mt-10 " action="send">
              <div className="flex justify-center text-secondary-orange-400 text-2xl border-b border-white pb-2">
                Personal Information
              </div>
              <div className="flex justify-between flex-col lg:flex-row">
                <div className="space-y-3">
                  <label htmlFor="" className="text-lg text-white pr-3">
                    First Name <span className="text-red-900">*</span>
                  </label>
                  <input
                    type="text"
                    autoComplete="false"
                    className=" form-input text-base p-2.5 bg-transparent border border-secondary-orange-500 sm:w-full  w-full focus:outline-none rounded "
                    value={login.FirstName}
                    onChange={(e) =>
                      setLogin({ ...login, FirstName: e.target.value })
                    }
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="space-y-3 mt-3 lg:mt-0">
                  <label htmlFor="" className="text-lg text-white pr-3">
                    Last Name <span className="text-red-900">*</span>
                  </label>
                  <input
                    type="text"
                    autoComplete="false"
                    className=" form-input text-base p-2.5 bg-transparent border border-secondary-orange-500 sm:w-full  w-full focus:outline-none rounded "
                    value={login.LastName}
                    onChange={(e) =>
                      setLogin({ ...login, LastName: e.target.value })
                    }
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-between flex-col lg:flex-row">
                <div className="space-y-3">
                  <label htmlFor="" className="text-lg text-white ">
                    Date of Birth <span className="text-red-900">*</span>
                  </label>
                  <input
                    type="text"
                    autoComplete="false"
                    className="form-input text-base p-2.5 bg-transparent border border-secondary-orange-500 sm:w-full  w-full focus:outline-none rounded "
                    value={login.DateOfBirth}
                    onChange={(e) =>
                      setLogin({ ...login, DateOfBirth: e.target.value })
                    }
                    placeholder="DD/MM/YYYY"
                    required
                  />
                </div>
                <div className="space-y-3 mt-3 lg:mt-0">
                  <label htmlFor="" className="text-lg text-white ">
                    Contact No. <span className="text-red-900">*</span>
                  </label>
                  <input
                    type="text"
                    autoComplete="false"
                    className="form-input text-base p-2.5 bg-transparent border border-secondary-orange-500 sm:w-full  w-full focus:outline-none rounded "
                    value={login.PhoneNumber}
                    onChange={(e) =>
                      setLogin({ ...login, PhoneNumber: e.target.value })
                    }
                    placeholder="Contact No."
                    required
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label htmlFor="" className="text-lg text-white ">
                  Email Address <span className="text-red-900">*</span>
                </label>
                <input
                  type="email"
                  className="form-input text-base p-2.5 bg-transparent border border-secondary-orange-500 sm:w-full w-full focus:outline-none rounded "
                  value={login.Email}
                  onChange={(e) =>
                    setLogin({ ...login, Email: e.target.value })
                  }
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="space-y-3">
                <label htmlFor="" className="text-lg text-white ">
                  Address
                </label>

                <textarea
                  rows={5}
                  className="form-textarea rounded focus:outline-none text-base p-3 bg-transparent border border-secondary-orange-500 sm:w-full w-full "
                  value={login.Address}
                  onChange={(e) =>
                    setLogin({ ...login, Address: e.target.value })
                  }
                  placeholder="Address"
                />
              </div>
              <div className="flex justify-center text-secondary-orange-400 text-2xl border-b border-white pb-2">
                Details
              </div>
              {/* <div className="flex justify-between"> */}
              <div className="space-y-3">
                <label htmlFor="" className="text-lg text-white ">
                  Cover Letter
                </label>
                <textarea
                  rows={5}
                  className="form-textarea rounded focus:outline-none text-base p-3 bg-transparent border border-secondary-orange-500 sm:w-full w-full "
                  value={login.CoverLetter}
                  onChange={(e) =>
                    setLogin({ ...login, CoverLetter: e.target.value })
                  }
                  //   placeholder="Address"
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="" className="text-lg text-white ">
                  Why do you want to work at MoneyTick?
                </label>
                <textarea
                  rows={5}
                  className="form-textarea rounded focus:outline-none text-base p-3 bg-transparent border border-secondary-orange-500 sm:w-full w-full "
                  value={login.Work}
                  onChange={(e) => setLogin({ ...login, Work: e.target.value })}
                  //   placeholder="Address"
                />
              </div>
              {/* </div> */}
              <div className="space-y-3">
                <label htmlFor="" className="text-lg text-white ">
                  Describe your greatest achievement so far as an employee
                </label>
                <textarea
                  rows={5}
                  className="form-textarea rounded focus:outline-none text-base p-3 bg-transparent border border-secondary-orange-500 sm:w-full w-full "
                  value={login.Acheviement}
                  onChange={(e) =>
                    setLogin({ ...login, Acheviement: e.target.value })
                  }
                  //   placeholder="Address"
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="" className="text-lg text-white ">
                  What’s the thing you most hope to learn in your next role?
                </label>
                <textarea
                  rows={5}
                  className="form-textarea rounded focus:outline-none text-base p-3 bg-transparent border border-secondary-orange-500 sm:w-full w-full "
                  value={login.Role}
                  onChange={(e) => setLogin({ ...login, Role: e.target.value })}
                  //   placeholder="Address"
                />
              </div>
              <div>
                <button
                  type="submit"
                  onClick={() => {
                    onFinish();
                  }}
                  className="shadow-bottom transition duration-500 bg-gradient-to-r from-secondary-orange-600 to-secondary-orange-400 text-white p-4 font-bold w-full rounded"
                >
                  Submit Your Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinOurTeam;
