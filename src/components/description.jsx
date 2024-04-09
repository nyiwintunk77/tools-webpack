import React from 'react'
import s from 'styles/description.scss'

export default function description() {
  return (
    <>
      <div>
        <h2>使い方</h2>
      </div>
      <ul className={ s('ln') }>
        <li>HTMLタグを除去します。</li>
        <li>styleタグのリンクを、文章中に展開したり、タブ文字や半角スペースなどの無駄な部分を除去することもできます。</li>
      </ul>
    </>
  )
}
