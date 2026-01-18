export default function Logo({
  className = 'w-12 h-12',
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox='0 0 100 100'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      {/* Синий фон (квадрат с легким скруглением) */}
      <rect width='100' height='100' rx='12' fill='#1e3a5f' />

      {/* Текст ФТ */}
      {/* Используем системный шрифт с засечками, чтобы было похоже на оригинал */}
      <text
        x='50'
        y='68'
        fontFamily='Times New Roman, serif'
        fontWeight='bold'
        fontSize='65'
        fill='white'
        textAnchor='middle'
        letterSpacing='-3'
      >
        ФТ
      </text>

      {/* Белая дуга (Swoosh) */}
      {/* Рисуем кривую Безье, которая проходит снизу вверх через буквы */}
      <path
        d='M 15 75 Q 50 95 85 25'
        stroke='white'
        strokeWidth='3'
        strokeLinecap='round'
        fill='none'
        opacity='0.9'
      />
    </svg>
  );
}
