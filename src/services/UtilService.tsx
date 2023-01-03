export function convert(str: string) {
  const date = new Date(str);
  const mnth = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
}

export function numerique(value: string | number) {
  return String(value)
    .replace(/\D/g, "")
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function numerique2(value: string | number) {
  return String(value)
    .replace(/\D/g, "")
    .replace(/\B(?=(\d{2})+(?!\d))/g, " ");
}
export function capitalize(value: string) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
}
export function lower(value: string) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toLowerCase() + value.slice(1);
}

export function dateformat(date: Date, type = 1) {
  date = new Date(date);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  } as any;
  const options2 = {
    year: "numeric",
    month: "long",
    day: "numeric",
  } as any;
  // const options3 = { weekday: 'numeric', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minutes: 'numeric' };
  const year = date?.getFullYear();
  const month = (1 + date?.getMonth()).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const heures = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  if (type === 1) {
    return day + "-" + month + "-" + year;
  }
  if (type === 2) {
    return date.toLocaleDateString("fr-FR", options);
  }
  if (type === 3) {
    return day + "-" + month + "-" + year + " " + heures + ":" + minutes;
  }
  if (type === 4) {
    return date.toLocaleDateString("fr-FR", options2);
  }
  if (type === 5) {
    return year + "-" + month + "-" + day + " " + heures + ":" + minutes;
  }
}

export function get_dateposted() {
  const date = new Date();
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return date.toISOString().slice(0, 16);
}

// export function array_somme(array: any[], key: string) {
//   let somme = 0;
//   for (let i = 0; i < array.length; i++) {
//     somme = somme + parseInt(array[i][key]);
//   }
//   return parseInt(somme);
// }

export function slugify2(strch: string) {
  if (strch.length > 0) {
    let str = strch.replace(/^\s+|\s+$/g, ""); // trim
    str = str.toLowerCase();
    // remove accents, swap ñ for n, etc
    const from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    const to = "aaaaeeeeiiiioooouuuunc------";
    for (let i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
    }
    str = str
      .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
      .replace(/\s+/g, "-") // collapse whitespace and replace by -
      .replace(/-+/g, "-"); // collapse dashes
    return str;
  }
  return "";
}

export function slugify(text: string) {
  if (text !== null) {
    return (
      text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-")
        // eslint-disable-next-line no-useless-escape
        .replace(/[^\w\-]+/g, "")
        // eslint-disable-next-line no-useless-escape
        .replace(/\-\-+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "")
    );
  }
  return "no-name";
}
