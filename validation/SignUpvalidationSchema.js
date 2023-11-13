import * as Yup from 'yup'


const SignUpvalidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string('Invalid password').required('Required'),
    phoneNumber: Yup.string('Invalid phone number').required('Required'),
    state: Yup.string('field is required').required('Required'),
})

export default SignUpvalidationSchema