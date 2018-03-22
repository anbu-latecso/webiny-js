import React from "react";
import classSet from "classnames";
import { createComponent } from "webiny-client";
import styles from "../styles.css";

class Footer extends React.Component {
    render() {
        if (this.props.render) {
            return this.props.render.call(this);
        }

        return (
            <div className={classSet(styles.footer, this.props.className)}>
                {this.props.children}
            </div>
        );
    }
}

export default createComponent(Footer, { styles });