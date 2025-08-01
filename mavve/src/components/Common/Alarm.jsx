import React, { useEffect, useRef } from "react";
import * as S from "./Alarm.style";
import noAlarm from "../../assets/Common/icn_noalarm.svg";

export default function Alarm({ isAlarmOpen, setIsAlarmOpen, alertRef }) {
  const alarmRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        alarmRef.current &&
        !alarmRef.current.contains(e.target) &&
        alertRef.current &&
        !alertRef.current.contains(e.target)
      ) {
        setIsAlarmOpen(false);
      }
    };

    if (isAlarmOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isAlarmOpen]);

  if (!isAlarmOpen) return null;

  return (
    <S.AlarmContainer ref={alarmRef}>
      <S.AlarmItem>
        <img src={noAlarm} alt="no alarm" />
        아직 알림이 없습니다!
      </S.AlarmItem>
    </S.AlarmContainer>
  );
}
