import { toast } from 'react-toastify';
import profile from '../IMG/profile.jpg';
import kubernetes_login from '../IMG/guides/kuberDash.PNG';

function Functions(){
    const props = {
        profile_image: profile,
        kubernetes_login: kubernetes_login,
        custom: (info, position) => {
            toast.info(info, {
                position: position,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        },
        success: (info, position) => {
            toast.success(info, {
                position: position,
                autoClose: 10000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return { props };

}

export default Functions;

