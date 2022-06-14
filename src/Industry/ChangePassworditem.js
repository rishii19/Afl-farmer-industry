import React, { useState } from "react";

const ChangePassworditem = ({onSubmit}) => {
 const [old_password, setOldPassword] = useState("");
  const [new_password1, setNewPassword1] = useState("");
  const [new_password2, setNewPassword2] = useState("");

    return (
        <div>
            <form onSubmit={(e) => onSubmit(e,old_password,new_password1,new_password2)}>
                <div  className="form-group">
                    <label for="recipient-name"  className="col-form-label fs-6 fw-bold">
                        Current Password:
                    </label>
                    <input
                        type="password"
                        value={old_password}
                        placeholder="Current Password"
                         className="form-control "
                        id="recipient-name"
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                </div>
                <div  className="form-group">
                    <label for="recipientname"  className="col-form-label fs-6 fw-bold">
                        New Password:
                    </label>
                    <input
                        type="password"
                        value={new_password1}
                        placeholder="New Password"
                         className="form-control"
                        id="recipientname"
                        onChange={(e) => setNewPassword1(e.target.value)}
                    />
                </div>
                <div  className="form-group">
                    <label for="recipient_name"  className="col-form-label fs-6 fw-bold">
                        Confirm Password:
                    </label>
                    <input
                        type="password"
                        value={new_password2}
                        placeholder="Confirm Password"
                         className="form-control"
                        id="recipient_name"
                        onChange={(e) => setNewPassword2(e.target.value)}
                    />
                </div>
                <div>Password  must have a minimum of 8 characters and contain at least one upper case letter, one lower case letter, one number, and one special character?</div>
                <button
                    className="btn btn-primary btn-md mt-3"
                    type="submit"
                >
                    {" "}
                    Update
                </button>
            </form>
        </div>
    )
}

export default ChangePassworditem