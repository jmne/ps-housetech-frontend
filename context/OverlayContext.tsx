import { createContext, useContext, useState } from "react";

interface OverlayData {
    current_overlay: JSX.Element | undefined;
    setOverlay: Function;
}

const overlayData = createContext<OverlayData>({
    current_overlay: undefined,
    setOverlay: () => { }
});

interface props {
    children: JSX.Element;
}

export function OverlayProvider({ children }: props) {
    const [overlay, setOverlay] = useState<JSX.Element | undefined>(undefined);

    let init_state: OverlayData = {
        current_overlay: overlay,
        setOverlay: setOverlay
    };

    return <overlayData.Provider value={init_state}>{children}</overlayData.Provider>;
}

export function useOverlayContext() {
    return useContext(overlayData);
}
