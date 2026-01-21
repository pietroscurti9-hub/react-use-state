export default function AppButton({lang, onSelect}) {
    // console.log("RENDERE APPBUTTON.JSX")
    return (
        <button onClick={() => onSelect()}>{lang.title}</button>
        // <button onClick={() => setActiveLang(lang)}>{lang.title}</button>
    )
}