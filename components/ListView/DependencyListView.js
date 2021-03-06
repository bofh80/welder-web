import React from "react";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";
import ListView from "./ListView";
import ListItemComponents from "./ListItemComponents";

class DependencyListView extends React.Component {
  componentWillMount() {}

  render() {
    return (
      <div>
        <div className="alert alert-warning alert-dismissable hidden">
          <span className="pficon pficon-warning-triangle-o" />
          <FormattedMessage
            defaultMessage="One or more dependencies have multiple variations that could be used.
                            A default variation was automatically selected.
                            Click a flagged dependency to see other options available."
          />
        </div>
        <ListView className={this.props.className} stacked>
          {this.props.listItems.map(listItem => (
            <ListItemComponents
              listItemParent={this.props.id}
              isDependency
              listItem={listItem}
              key={listItem.name}
              noEditComponent={this.props.noEditComponent}
              handleRemoveComponent={this.props.handleRemoveComponent}
              handleComponentDetails={this.props.handleComponentDetails}
              componentDetailsParent={this.props.componentDetailsParent}
            />
          ))}
        </ListView>
      </div>
    );
  }
}

DependencyListView.propTypes = {
  id: PropTypes.string,
  listItems: PropTypes.arrayOf(PropTypes.object),
  noEditComponent: PropTypes.bool,
  handleComponentDetails: PropTypes.func,
  handleRemoveComponent: PropTypes.func,
  componentDetailsParent: PropTypes.shape({
    active: PropTypes.bool,
    group_type: PropTypes.string,
    inBlueprint: PropTypes.bool,
    name: PropTypes.string,
    release: PropTypes.string,
    releaseSelected: PropTypes.string,
    summary: PropTypes.string,
    ui_type: PropTypes.string,
    userSelected: PropTypes.bool,
    version: PropTypes.string,
    versionSelected: PropTypes.string
  }),
  className: PropTypes.string
};

DependencyListView.defaultProps = {
  id: "",
  listItems: [],
  noEditComponent: true,
  handleComponentDetails: function() {},
  handleRemoveComponent: function() {},
  componentDetailsParent: {},
  className: ""
};

export default DependencyListView;
