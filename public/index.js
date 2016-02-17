import image from '.components/image';

const gallary = ({images}) => (
    <div class="honeycomb">
        {images
            .map(img => (
                image(img)
            ))
        }
    </div>
);

ReactDOM.render(
    <gallary />,
    document.querySelector('#gallary')
);
