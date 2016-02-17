import image from '../image/image.jsx';

export default ({images}) => {
    console.log(images);
    <div class="honeycomb">
        {images
            .map(img => (
                <image props={img}></image>
            ))
        }
    </div>
};
