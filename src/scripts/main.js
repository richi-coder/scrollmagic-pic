import ScrollMagic, { Controller } from 'scrollmagic'
import { ScrollMagicPluginIndicator} from "scrollmagic-plugins";
ScrollMagicPluginIndicator(ScrollMagic);    

let controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    triggerElement: ".firstcomponent",
    duration: '500%',
    triggerHook: 0
})
        .setPin(".secondcomponent", {pushFollowers: true})
        .addIndicators({ name: "hi"})
        .addTo(controller)
