import React, { useRef, useState } from 'react';
import s from 'styles/contents.scss'

const contents = () => {
    const textArea = useRef()
    const textArea2 = useRef()

    const [copy,setCopy] = useState(false);
    const [copySuccess, setCopySuccess] = useState('');

    const [styleCheck, setStyleCheck] = useState(false);
    const [otherCheck, setOtherCheck] = useState(false);

    const onSubmitTextArea = (e) => {
        if(!styleCheck && !otherCheck) { return }
        if(styleCheck) {
            e.preventDefault();
            removeStyle();
            textArea2.current.select();    
        }
    }

    const removeStyle = () => {
        const dom = document.createElement("div");
        dom.innerHTML = textArea.current.value;
        const tg = dom.getElementsByTagName('*');
        for(var i=0; i < tg.length; i++){
            tg[i].removeAttribute("style");
        }
        textArea2.current.textContent = dom.innerHTML;

        return dom.innerHTML
    }

    const onRemoveText = (e) => {
        e.preventDefault();
        textArea.current.value = '';
        textArea2.current.value = '';
        setCopySuccess('');
    }

    const onCopyText = (e) => {
        e.preventDefault();
        textArea2.current.select();
        document.execCommand('copy');
        setCopySuccess('Copied!');
        setCopy(!copy);
        e.target.focus();
    }

    return (
        <div className={ s('block-center') }>
            <div className={ s('app') }>
                <textarea ref={ textArea } id={ s('txtArea1') } placeholder="テーブルのStyleタグ付きの文章を入力..."></textarea>
            </div>
            <div className={ s('button-block') }>
                <div className={ s('check-block') }>
                    <label>
                        <input type='checkbox' checked={styleCheck} onChange={()=> {setStyleCheck(!styleCheck)}}/>
                        styleタグの解決 &nbsp;
                    </label>
                    <label>
                        <input type='checkbox' checked={otherCheck} onChange={()=> {setOtherCheck(!otherCheck)}}/>
                        タブ、空行、重複スペース、重複改行の削除
                    </label>
                </div>
                <div>
                    <input type='button' value='変換' id='btnSubmit' onClick={onSubmitTextArea}/>
                </div>
            </div>
            <div className={ s('app') }>
                <textarea ref={textArea2} id={ s('txtArea2') } readOnly={true}></textarea>
            </div>
            <div className={ s('button-block-row') }>
                <input type='button' value="クリア" id={ s('btnClear') } onClick={onRemoveText}/>
                <input type='button' value="コピー" id={ s('btnCopy') } onClick={onCopyText}/>
                { copy && copySuccess}
            </div>

        </div>
    )
}

export default contents;