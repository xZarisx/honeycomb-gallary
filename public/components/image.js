export default = ({src, alt, title}) => (
    <div class="image">
        <img class="image__image" src="{src}" alt="{alt}" />
        <div class="image--toggle" ng-click="$parent.selectedBadge = image.id">
            <img class="image__image image__full--toggle" src="{src}" alt="" />
            <h4 class="image__header">{title}</h4>
        </div>
    </div>
);
