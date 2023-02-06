import { forwardRef, useState } from 'react';
import { images } from '~/assets/images';

function Image(
    {
        src = '', // để src = '' thì nếu k truyền src nó sẽ error và gọi onError, còn k nó k chạy fallback mà ở dạng ảnh lỗi kèm alt
        alt = 'ImageComponent',
        className = 'h-10 w-10', // để tạm ảnh nhỏ
        fallback: customFallback = images.placeholderAvatar2,
        ...props
    },
    ref,
) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return <img src={fallback || src} alt={alt} className={className} ref={ref} {...props} onError={handleError} />;
}

export default forwardRef(Image);
