import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import React from "react";

import Repository from "../../DbRepository";
import Icons from "./Icon.json";

export default function CategoryModal({ open, handleClose, onChange }: any) {
  const [name, setName] = React.useState("");
  const [icons, setIcons] = React.useState<any>([]);
  const [icon, setIcon] = React.useState("");

  const addCategory = async () => {
    await Repository.categoryAdd(name, icon);
    handleClose();
    onChange(true);
  };

  const getIconList = async () => {
    const myIcons = Icons as any;

    myIcons.forEach((x: any, idx: any) => {
      x.label = x.name;
      x.key = idx;
      return x;
    });
    const unique = [...new Set(myIcons.map((item: any) => item.label))]; // [ 'A', 'B']
    setIcons(unique);
  };

  React.useEffect(() => {
    getIconList();
  }, []);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Ajouter un revenu</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          margin="dense"
          name="name"
          label="Le nom de la catégorie"
          variant="filled"
          onChange={e => setName(e.target.value)}
        />
        <br />
        <br />
        <Autocomplete
          disablePortal
          fullWidth
          id="combo-box-demo"
          options={icons}
          value={icon}
          inputValue={icon}
          renderOption={(props, option) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
            <i
              {...props}
              style={{ fontSize: "48px" }}
              className="material-icons"
              onClick={() => setIcon(option)}
            >
              {option}
            </i>
          )}
          renderInput={params => <TextField {...params} label="Icon" />}
          onInputChange={(event, newInputValue) => {
            console.log(newInputValue, event);
            setIcon(newInputValue);
          }}
        />
        <br />
        <br />
        <br />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Annuler</Button>
        <Button onClick={addCategory}>Ajouter</Button>
      </DialogActions>
    </Dialog>
  );
}
