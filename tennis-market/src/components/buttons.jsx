import styled from "styled-components";
import iconPlus from '../assets/images/icon-plus.svg'
const LargeBtnStyle = styled.button`
  display: block;
  width: 220px;
  max-width: 100%;
  background: none;
  border: 0;
  padding: 19px;
  border-radius: 5px;
  font-size: 24px;
  color: ${({theme}) => theme.w};
  background: ${(props) => props.disabled ? props.theme.gray2 : props.theme.sub};
  box-sizing: border-box;
  cursor: pointer;

`
const MediumBtnStyle = styled.button`
  display: block;
  width: 480px;
  max-width: 100%;
  background: none;
  border: ${(props) => props.$white ? `1px solid ${props.theme.gray2}` : `unset`};
  padding: 19px;
  border-radius: 5px;
  font-size: 18px;
  color: ${(props) => props.$white ? props.theme.gray3 : props.theme.w};
  background: ${({theme}) => theme.sub};
  background: ${(props) => props.disabled ? props.theme.gray2 : ""};
  background: ${(props) => props.$dark ? props.theme.gray3 :""};
  background: ${(props) => props.$white ? props.theme.w : ""};
  box-sizing: border-box;
  cursor: pointer;
`
const MSBtnStyle = styled.button`
  display: block;
  width: 166px;
  max-width: 100%;
  background: none;
  border: ${(props) => props.$white ? `1px solid ${props.theme.gray2}` : `unset`};
  padding: 19px;
  border-radius: 5px;
  font-size: 16px;
  color: ${(props) => props.$white ? props.theme.gray3 : props.theme.w};
  background: ${({theme}) => theme.sub};
  background: ${(props) => props.$white ? props.theme.w : ""};
  box-sizing: border-box;
  cursor: pointer;
`
const IconMSStyle = styled.button`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  width: 166px;
  max-width: 100%;
  background: none;
  border: unset;
  padding: 19px;
  border-radius: 5px;
  font-size: 18px;
  color: ${({theme}) => theme.w};
  background: ${({theme}) => theme.sub};
  box-sizing: border-box;
  cursor: pointer;
`
const SmallBtnStyle = styled.button`
  display: block;
  width: 80px;
  max-width: 100%;
  border: ${(props) => props.$white ? `1px solid #bfbfbf` : `unset`};
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  color: ${(props) => props.$white ? props.theme.gray3 : props.theme.w};
  background: ${(props) => props.$white ? props.theme.w : props.theme.sub};
  box-sizing: border-box;
  cursor: pointer;
`
const TabBtnStyle = styled.button`
  display: block;
  width: 250px;
  max-width: 100%;
  border: none;
  border-bottom: ${(props) => props.$off ?`6px solid ${props.theme.w}`  : `6px solid ${props.theme.sub}`};
  padding: 19px;
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.$off ? props.theme.gray3 : props.theme.sub};
  background: ${({theme}) => theme.w};
  box-sizing: border-box;
  cursor: pointer;
`
const TabMeuStyle = styled.button`
  position: relative;
  display: block;
  width: 320px;
  max-width: 100%;
  border: none;
  border-radius: 5px;
  padding: 15px;
  font-size: 16px;
  color: ${(props) => props.$off ? props.theme.gray4 : props.theme.w};
  background: ${(props) => props.$off ? props.theme.w : props.theme.sub};
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.$off ? props.theme.lightSub : props.theme.sub};
  }
`

const RoundStyle = styled.span`
  position: absolute;
  right: 20px;
  top: 15px;
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 60px;
  background: ${({theme}) => theme.red};
  color: ${({theme}) => theme.w};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
`

//--- large ---
export const L_btn = ({children, event}) => {
  return (
    <LargeBtnStyle type="button" onClick={() => event}>{children}</LargeBtnStyle>
  )
}
export const L_btn_disable = ({children}) => {
  return (
    <LargeBtnStyle type="button" disabled >{children}</LargeBtnStyle>
  )
}

//--- medium ---
export const M_btn = ({children, event}) => {
  return (
    <MediumBtnStyle type="button" onClick={() => event}>{children}</MediumBtnStyle>
  )
}
export const M_btn_dark = ({children, event}) => {
  return (
    <MediumBtnStyle $dark type="button" onClick={() => event}>{children}</MediumBtnStyle>
  )
}
export const M_btn_white = ({children, event}) => {
  return (
    <MediumBtnStyle $white type="button" onClick={() => event}>{children}</MediumBtnStyle>
  )
}

export const M_btn_disable = ({children}) => {
  return (
    <MediumBtnStyle disabled type="button" >{children}</MediumBtnStyle>
  )
}

//--- medium small ---
export const MS_btn = ({children, event}) => {
  return (
    <MSBtnStyle type="button" onClick={() => event}>{children}</MSBtnStyle>
  )
}
export const MS_btn_white = ({children, event}) => {
  return (
    <MSBtnStyle $white type="button" onClick={() => event}>{children}</MSBtnStyle>
  )
}
export const MS_btn_icon = ({children, event}) => {
  return (
      <IconMSStyle type="button" onClick={() => event}>
        <img src={iconPlus} alt="추가 아이콘" />
        {children}
      </IconMSStyle>
  )
}

//--- small ---
export const S_btn = ({children}) => {
  return (
    <SmallBtnStyle disabled type="button" >{children}</SmallBtnStyle>
  )
}
export const S_btn_white = ({children}) => {
  return (
    <SmallBtnStyle $white disabled type="button" >{children}</SmallBtnStyle>
  )
}


//--- tab ---
export const Tab_active_btn = ({children}) => {
  return (
    <TabBtnStyle type="button" >{children}</TabBtnStyle>
  )
}
export const Tab_disable_btn = ({children}) => {
  return (
    <TabBtnStyle $off type="button" >{children}</TabBtnStyle>
  )
}


// --- tab menu ---
export const TabMenu_on_btn = ({children}) => {
  return (
    <TabMeuStyle type="button" >{children}<RoundStyle>1</RoundStyle></TabMeuStyle>
  )
}
export const TabMenu_off_btn = ({children}) => {
  return (
      <TabMeuStyle $off type="button" >
        {children}
        <RoundStyle>1</RoundStyle>
      </TabMeuStyle>
  )
}