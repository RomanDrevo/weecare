import React from 'react';
import ResponsiveComponent from "../../framework/components/ResponsiveComponent";
import './Category.module.scss'


class Category extends ResponsiveComponent {

    renderDesktop() {
        const {category} = this.props

        return (
            <div className="category" style={{ backgroundImage: `url(${category.image})`}}>
                <div className="category-name">{category.name}</div>
            </div>

        );
    }

    renderMobile() {
        return <div>Mobile Category</div>
    }
}

export default Category;
