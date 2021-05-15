export default (string) => {
    string = string.toLowerCase().replaceAll('_', ' ')
    return string.charAt(0).toUpperCase() + string.slice(1);
}
