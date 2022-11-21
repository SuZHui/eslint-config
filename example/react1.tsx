import { useRef, useState } from 'react'
import { ShareButton } from '@hotishop/ui'
import clsx from 'clsx'
import { useClickAway } from 'react-use'
import type { StyleDataType } from '../types'

export const StyleExpand = ({
  facebook,
  twitter,
  pinterest,
  isPC,
}: StyleDataType & { isPC: boolean }) => {
  const [isShowing, setIsShowing] = useState(false)
  const ref = useRef()

  useClickAway(ref, () => {
    setIsShowing(false)
  })

  return (
    <div
      ref={ref}
      className={clsx(
        'social-share absolute z-10 flex flex-col gap-4 items-end',
        isPC ? 'top-16 right-[-32px]' : 'top-12 right-3',
      )}
    >
      <button
        type="button"
        className={clsx(
          'group',
          'overflow-hidden',
          'rounded-full',
          'p-2',
          'shadow-heavy',
          'transition-transform',
          'hover:scale-125',
          isShowing
            ? 'bg-primary'
            : 'bg-white text-gray-500 hover:text-gray-700',
        )}
        onClick={() => {
          setIsShowing((v) => !v)
        }}
      >
        <svg
          className="h-5 w-5 group-hover:animate-topdown"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          {isShowing ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          )}
        </svg>
      </button>
      <div
        className={clsx(
          'flex-col',
          'gap-4',
          'items-end',
          isShowing ? 'flex' : 'hidden',
        )}
      >
        {facebook && (
          <ShareButton
            className="rounded-full px-4 py-2 shadow-heavy bg-white"
            provider="facebook"
          >
            <svg
              className="h-4 w-4 color-primary"
              viewBox="0 0 1024 1024"
              fill="currentColor"
            >
              <path d="M608 192h160V0H608C484.489 0 384 100.489 384 224v96H256v192h128v512h192V512h160l32-192H576v-96a32.427 32.427 0 0 1 32-32z" />
            </svg>
            <span>Facebook</span>
          </ShareButton>
        )}
        {pinterest && (
          <ShareButton
            className="rounded-full px-4 py-2 shadow-heavy bg-white"
            provider="pinterest"
          >
            <svg
              className="h-4 w-4 color-primary"
              viewBox="0 0 1024 1024"
              fill="currentColor"
            >
              <path d="M441.002154 676.356754c-17.722962 88.614808-37.490919 160.529652-59.303872 215.743532s-54.531882 99.179785-98.157787 131.899714c-4.089991-50.441891-6.475986-91.341802-7.157984-122.697734s3.067993-68.846851 11.247975-112.472756c8.179982-43.625905 15.677966-79.071829 22.493952-106.33777s15.677966-61.007868 26.584942-101.22578c10.905976-40.217913 19.085959-73.95984 24.539947-101.225781-16.359965-35.445923-22.83595-74.981837-19.427958-118.607743s19.767957-79.753827 49.079894-108.382765c29.309936-28.629938 63.051863-35.445923 101.22478-20.449955 27.265941 10.906976 42.262908 31.015933 44.989903 60.326869s-1.704996 61.689866-13.292972 97.135789-22.493951 70.550847-32.719929 105.314772-11.586975 65.439858-4.089991 92.023801c7.498984 26.583942 28.970937 43.284906 64.416861 50.100891 46.3529 9.543979 87.59281-3.407993 123.719731-38.853916s61.349867-80.093826 75.663836-133.944709c14.314969-53.849883 18.063961-109.405763 11.247976-166.664639S736.839513 197.153793 706.847578 167.161858c-42.262908-43.625905-93.727797-67.482854-154.394666-71.572845s-116.222748 7.156984-166.664638 33.741927c-50.442891 26.583942-91.341802 66.459856-122.697734 119.62974s-42.262908 111.109759-32.719929 173.821623c2.726994 14.996967 10.224978 32.719929 22.494951 53.169885s19.426958 36.467921 21.471953 48.055896c2.044996 11.587975-3.748992 34.422925-17.381962 68.505851-99.521784-23.17595-147.236681-101.56578-143.14669-235.16949 2.725994-94.069796 38.512917-173.822623 107.359768-239.261481S369.428309 14.472189 459.407114 3.564212c111.790758-12.269973 210.630543 7.157984 296.519357 58.281874s134.966707 125.764727 147.236681 223.922514c17.722962 119.97174-4.77099 228.013506-67.483854 324.126298s-148.599678 140.079696-257.664441 131.899714c-14.996967-1.362997-29.310936-4.42999-42.944907-9.20198s-23.856948-9.20198-30.673934-13.291971-17.381962-11.246976-31.696931-21.471954-24.879946-17.381962-31.696931-21.471953z" />
            </svg>
            <span>Pinterest</span>
          </ShareButton>
        )}
        {twitter && (
          <ShareButton
            className="rounded-full px-4 py-2 shadow-heavy bg-white"
            provider="twitter"
          >
            <svg
              className="h-4 w-4 color-primary"
              viewBox="0 0 1024 1024"
              fill="currentColor"
            >
              <path d="M923.2 289.6c0 354.4-232.8 609.6-575.2 620.8-144.8 11.2-244-32.8-332.8-99.2 99.2 11.2 232.8-21.6 298.4-88.8-99.2 0-155.2-56-188-132h88.8c-88.8-33.6-156-100-156-210.4 21.6 11.2 44 21.6 88.8 21.6-77.6-44-121.6-188-66.4-276.8C180 235.2 301.6 335.2 502.4 345.6c-56-220.8 232.8-332.8 354.4-188 56-11.2 88.8-32.8 132-56-11.2 56-44 88.8-88.8 110.4 44 0 77.6-11.2 110.4-32.8-10.4 44-54.4 88.8-87.2 110.4z" />
            </svg>
            <span>Twitter</span>
          </ShareButton>
        )}
      </div>
    </div>
  )
}
