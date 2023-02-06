import Image from '../Image';

/**
 * Hiện avatar là photoUrl hoặc là dạng ảnh với chữ cái đầu của email nếu k tồn tại photoUrl
 */
function RecipientAvatar({ recipient, recipientEmail, className }) {
    return recipient?.photoURL ? (
        <Image
            src={recipient.photoURL}
            alt="recipientCover"
            className={`h-10 w-10 rounded-full object-cover ${className}`}
        />
    ) : (
        <div
            className={`grid h-10 w-10 place-content-center rounded-full bg-slate-500/60 font-bold text-white ${className}`}
        >
            {recipientEmail && recipientEmail[0].toUpperCase()}
        </div>
    );
}

export default RecipientAvatar;
