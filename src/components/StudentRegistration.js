import React from 'react'
import { useForm } from 'react-hook-form'

export const StudentRegistration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            mode: "onChange",

        }
    )

    const submit = (data) => {

        console.log(data);
    };

    const validate = {
        name: { required: "Name is Required" },
        age: {
            min: {
                value: 18,
                message: "Age Must Be Greater than 18"
            }
        },
        phone: {
            required: "Phone is Required",
            pattern: {
                value: /^[6-9]{1}[0-9]{9}$/,
                message: "Phone Number is Invalid"
            }
        },
        gender: {
            required: "Please Check a Single Radio button",

        }

    }
   

    console.log(errors);

    return (

        <div>

            <form onSubmit={handleSubmit(submit)}>
                
                <div>
                    <label>Age</label>
                    <input type="text" name='age' {...register("age", validate.age)}></input>

                    {
                        errors.age && <span>{errors.age.message}</span>
                    }
                </div>
                <div>
                    <label>Phone</label>
                    <input type="text" name='phone' {...register("phone", validate.phone)}></input>

                    {
                        errors.phone && <span>{errors.phone.message}</span>
                    }
                </div>
                <div>
                    <label>Gender :  </label>
                    Male : <input type="radio" name='gender' value="male"  defaultChecked {...register("gender")}></input>
                    Female :  <input type="radio" name='gender' value="female" {...register("gender")}></input>
                    {
                        errors.gender && <span>{errors.gender.message}</span>
                    }

                </div>
                <div>
                    <label>Hobbies :</label>
                    Travelling : <input type="checkbox" name="hobby" value="travelling"{...register("hobbies")}></input>
                    Reading : <input type="checkbox" name="hobby" value="reading"{...register("hobbies")}></input>
                    Writing : <input type="checkbox" name="hobby" value="writing"{...register("hobbies")}></input>
                </div>
                <div>
                    <label>Country</label>
                    <select name="country" defaultChecked {...register("country")}>
                        <option value="india">India</option>
                        <option value="colombo">Colombo</option>
                        <option value="uk">UK</option>
                        <option value="russia">Russia</option>
                    </select>
                </div>




                
            </form>

        </div>

    )
}
