
    <div class="image" id="{{image.id}}">
        <img class="image__image" src="{{image.image}}" alt="{{image.title}} Icon" />
        <div class="image--toggle" ng-click="$parent.selectedBadge = image.id">
            <img class="image__image image__full--toggle" src="{{image.src}}" alt="" />
            <h4 class="image__header">{{image.title}}</h4>
        </div>
    </div>

const gallary = 

ReactDOM.render(
    <gallary />,
    document.querySelector('#gallary')
);
