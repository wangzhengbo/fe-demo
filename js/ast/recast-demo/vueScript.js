import AB from './a'

export default {
    data() {
        return {
            tabs: []
        }
    },
    methods: {
        login() {
            // ai-disallow-concurrent logining
            console.log('login')
        },
        vistor() {
            /* ai-disallow-concurrent guestlogining */
            console.log('vistor')
        },
        yyy() {
            // yyy
            console.log('yyy')
        }
    }
}