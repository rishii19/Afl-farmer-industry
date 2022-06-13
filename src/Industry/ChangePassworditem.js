import React, { useState } from "react";

const ChangePassworditem = ({onSubmit}) => {
 const [old_password, setOldPassword] = useState(" ");
  const [new_password1, setNewPassword1] = useState("");
  const [new_password2, setNewPassword2] = useState("");

    return (
        <div>
            <form onSubmit={(e) => onSubmit(e,old_password,new_password1,new_password2)}>
                <div class="form-group">
                    <label for="recipient-name" class="col-form-label">
                        Current Password:
                    </label>
                    <input
                        type="password"
                        value={old_password}
                        placeholder="Current Password"
                        class="form-control"
                        id="recipient-name"
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                </div>
                <div class="form-group">
                    <label for="recipientname" class="col-form-label">
                        New Password:
                    </label>
                    <input
                        type="password"
                        value={new_password1}
                        placeholder="New Password"
                        class="form-control"
                        id="recipientname"
                        onChange={(e) => setNewPassword1(e.target.value)}
                    />
                </div>

                <div class="form-group">
                    <label for="recipient_name" class="col-form-label">
                        Confirm Password:
                    </label>
                    <input
                        type="password"
                        value={new_password2}
                        placeholder="Confirm Password"
                        class="form-control"
                        id="recipient_name"
                        onChange={(e) => setNewPassword2(e.target.value)}
                    />
                </div>
                <br></br>
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