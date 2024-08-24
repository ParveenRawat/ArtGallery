import React from "react";
import Title from "../shared/Title";
import Navbar from "../navbar/Navbar";

//This is used to maintain a layout for app
//if a component is exported as :
//export default AppLayout()(componentNameHere); then it uses this template
//if exported as :
//export default ComponentNameHere; then it doesn't use this template

//WrappedComponents is the Component passed to AppLayout and props contains its prompts
//edit this layout as per need

const AppLayout = () => (WrappedComponents) => {
  return (props) => {
    return (
      <>
        <Title />
        <Navbar />
        <WrappedComponents {...props} />
        {/* Can put footer here in the future */}
      </>
    );
  };
};

export default AppLayout;
