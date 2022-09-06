import React from 'react'
import { useForm } from 'react-hook-form'


export const submitTask = () => {

    var {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const submit = async (userTypeName) => {
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div class="row">
                    <div class="col">
                        <input type="text" class="form-control" id="email" placeholder="Enter Name"  {...register('name')} />
                    </div>

                    <div class="col">
                        <input type="text" class="form-control" id="email" placeholder="Enter email" name="email" {...register('email')} />
                    </div>
                    <div class="col">
                        <input type="password" class="form-control" placeholder="Enter password" name="pswd" {...register('pswd')} />
                    </div>

                    <div class="col">
                        <input type="tel" class="form-control" placeholder="Phone" name="phone" {...register('phone')} />
                    </div>
                </div>
            </form>
        </div>
    )
}
