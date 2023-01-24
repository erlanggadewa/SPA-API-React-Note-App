import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { HiCheck, HiExclamation, HiMail, HiX } from "react-icons/hi";
import useInput from "../hooks/useInput";
export default function Register() {
  const [email, OnEmailChange] = useInput("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState();
  const [isPasswordWeak, setIsPasswordWeak] = useState();

  function passwordCheck(password, repeatPassword) {
    if (repeatPassword === "" && password === "") {
      return setIsPasswordMatch(null);
    }
    if (
      password === repeatPassword &&
      password !== "" &&
      repeatPassword !== ""
    ) {
      return setIsPasswordMatch(true);
    }
    return setIsPasswordMatch(false);
  }

  function passwordStrongCheck(passwordLength) {
    if (passwordLength < 8 && passwordLength !== 0) {
      return setIsPasswordWeak(true);
    }
    return setIsPasswordWeak(false);
  }

  React.useEffect(() => {
    passwordStrongCheck(password.length);
    passwordCheck(password, repeatPassword);
  }, [password, repeatPassword]);

  return (
    <>
      <div className="p-4">
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email4" value="Your email" />
            </div>
            <TextInput
              id="email4"
              type="email"
              icon={HiMail}
              placeholder="xyz@gmail.com"
              required={true}
              value={email}
              onChange={OnEmailChange}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Your password" />
            </div>
            <TextInput
              id="password2"
              type="text"
              required={true}
              shadow={true}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="repeat-password" value="Repeat password" />
            </div>
            <TextInput
              id="repeat-password"
              type="text"
              required={true}
              shadow={true}
              value={repeatPassword}
              onChange={(e) => {
                setRepeatPassword(e.target.value);
              }}
            />
          </div>

          {/* Toast text for password match status */}
          <div
            className={`${
              isPasswordMatch === null ? "hidden" : "flex"
            } items-center`}
          >
            <div
              className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                isPasswordMatch
                  ? "bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200"
                  : "bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200"
              }`}
            >
              {isPasswordMatch ? (
                <HiCheck className="h-5 w-5" />
              ) : (
                <HiX className="h-5 w-5" />
              )}
            </div>
            <div
              className={`ml-3 text-sm font-semibold ${
                isPasswordMatch ? "text-green-600" : "text-red-600"
              }`}
            >
              {isPasswordMatch ? "Password Match" : "Password doesn't match"}
            </div>
          </div>
          {/* End Toast text for password match status */}

          {/* Toast for check password strong status */}
          {isPasswordWeak ? (
            <div className="flex items-center">
              <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
                <HiExclamation className="h-5 w-5" />
              </div>
              <div className="ml-3 text-sm font-semibold text-orange-500 ">
                Password must be at least 8 characters long
              </div>
            </div>
          ) : null}
          {/* End toast for check password strong status */}

          <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree">
              I agree with the{" "}
              <span className="text-blue-600  dark:text-blue-500">
                terms and conditions
              </span>
            </Label>
          </div>
          <Button type="submit">Register new account</Button>
        </form>
      </div>
    </>
  );
}
