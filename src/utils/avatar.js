function stringAvatar(name) {
  return {
    sx: {
      bgcolor: "rgb(184, 121, 5)",
      width: 35,
      height: 35,
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export { stringAvatar };
