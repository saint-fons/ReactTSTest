import React from "react";
import {
  DefaultButton,
  PrimaryButton,
} from "@fluentui/react/lib/Button";

export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}

function _alertClicked(): void {
  alert("Clicked");
}

const FluentUISelectors = () => {
  return (
    <div>
      <DefaultButton
        text="Standard"
        onClick={_alertClicked}
        allowDisabledFocus
        disabled={false}
        checked={false}
      />
    </div>
  );
};

export default FluentUISelectors;
