import React from 'react';
import { useForm } from 'react-hook-form';

export function Form() {
    const { register, handleSubmit, errors  } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form class="form" onSumbit={handleSubmit(onSubmit)}>
            <div class="form-fields">
                <input name="name" placeholder="name" ref={register} />
                <input name="email" placeholder="email" 
                    ref={register({ required: true })} />
                    {errors.number && 'Email is required.'}
                <input name="number" placeholder="number"
                    ref={register} />
            </div>
            <div class="form-main">
                <textarea name="comments" type="text" placeholder="comments"
                    class="form-textarea"
                    ref={register} />
            </div>
            <input class="form-submit" type="submit" />
        </form>
    );
}
