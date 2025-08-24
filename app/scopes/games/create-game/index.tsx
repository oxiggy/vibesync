import React, { useEffect, useRef, useState } from 'react'
import { InputWithLang } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

type LangText = { ru: string; en: string }
type Question = { id: number; title: LangText }

export default function CreateGame() {
  const [gameName, setGameName] = useState<LangText>({ ru: '', en: '' })
  const [questions, setQuestions] = useState<Question[]>([])

  const idRef = useRef(1)
  const nextId = () => idRef.current++

  const createEmptyQuestion = (): Question => ({ id: nextId(), title: { ru: '', en: '' } })

  useEffect(() => {
    if (questions.length === 0) setQuestions([createEmptyQuestion()])
  }, [])

  const handleQuestionTitleChange = (
    idx: number,
    lang: keyof LangText,
    value: string,
  ) => {
    setQuestions(prev => {
      const next = structuredClone(prev) as Question[]
      next[idx].title[lang] = value

      const isLast = idx === next.length - 1
      const nowHasText = !!(next[idx].title.ru.trim() || next[idx].title.en.trim())
      if (isLast && nowHasText) {
        next.push(createEmptyQuestion())
      }
      return next
    })
  }

  const removeQuestion = (qIdx: number) => {
    setQuestions(prev => {
      const filtered = prev.filter((_, i) => i !== qIdx)
      return filtered.length ? filtered : [createEmptyQuestion()]
    })
  }

  return (
    <div className='flex gap-4 flex-col'>
      <div className='flex gap-4 items-start justify-between'>
        <div className='grow flex gap-2 flex-col'>
          <InputWithLang
            placeholder='Название игры'
            className='!text-lg font-bold'
            lang='ru'
            value={gameName.ru}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setGameName(g => ({ ...g, ru: e.target.value }))
            }
          />
          <InputWithLang
            placeholder='Game name'
            className='!text-lg font-bold'
            lang='en'
            value={gameName.en}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setGameName(g => ({ ...g, en: e.target.value }))
            }
            />
        </div>

        <div className='flex gap-2 flex-col'>
          <Button>
            Создать игру
          </Button>
        </div>
      </div>

      {questions.map((question, qIdx) => (
        <div key={question.id} className="flex gap-4 items-start justify-between border rounded-2xl p-4">
          <div className="grow flex gap-3 flex-col">
            <div className="flex gap-2 flex-col">
              <InputWithLang
                placeholder="Вопрос"
                className="!text-lg font-bold"
                lang="ru"
                value={question.title.ru}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleQuestionTitleChange(qIdx, 'ru', e.target.value)
                }
              />
              <InputWithLang
                placeholder="Question"
                className="!text-lg font-bold"
                lang="en"
                value={question.title.en}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleQuestionTitleChange(qIdx, 'en', e.target.value)
                }
              />
            </div>
          </div>

          <div className="shrink-0">
            <Button variant="secondary" onClick={() => removeQuestion(qIdx)}>
              Удалить вопрос
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}