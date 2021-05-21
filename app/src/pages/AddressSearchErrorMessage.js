import {Toast, KIND} from 'baseui/toast';


export default function AddressSearchErrorMessage({message}) {
    return (
        <div className="top-right">
            <Toast kind={KIND.negative}>
                {message}
            </Toast>
        </div>
    );
}
