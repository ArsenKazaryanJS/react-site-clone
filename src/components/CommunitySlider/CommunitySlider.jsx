import img1 from '../../assets/community/img1.webp';
import img2 from '../../assets/community/img2.webp';
import img3 from '../../assets/community/img3.webp';
import img4 from '../../assets/community/img4.webp';
import img5 from '../../assets/community/img5.webp';
import img6 from '../../assets/community/img6.webp';
import img7 from '../../assets/community/img7.webp';
import img8 from '../../assets/community/img8.webp';

import './communityslider.css';

export const CommunitySlider = () => {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8];
    const repeatedImages = images.concat(images, images); 

    return (
        <div className="communitySlider">
            <div className="slidertrack">
                {repeatedImages.map((path, index) => (
                    <img className="sliderimg" key={index} src={path} style={{ rotate: index % 2 === 0 ? '-2deg' : '2deg' }} alt={`Slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};
