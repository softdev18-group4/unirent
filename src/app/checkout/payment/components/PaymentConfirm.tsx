import { title } from 'process';
import Swal from 'sweetalert2';
import Payment from '../page';

interface Confirm {
    paymentState: string;
    setPayment: (value: boolean) => void
}

export default function PaymentConfirm({ paymentState, setPayment }: Confirm) {

    if (paymentState == 'success') {
        setPayment(false)
        Swal.fire({
            title: 'Payment Success!',
            icon: 'success'
        });
    }
    else {
        setPayment(false)
        Swal.fire({
            title: 'Payment Failed!',
            text: 'Please try again later',
            icon: 'error'
        })
    }

    return (
        <div style={{ display: paymentState ? 'block' : 'none' }}>
        </div>
    )
}