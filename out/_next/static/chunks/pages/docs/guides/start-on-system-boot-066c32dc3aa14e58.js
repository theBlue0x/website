(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[371],{7728:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/guides/start-on-system-boot",function(){return t(838)}])},838:function(e,s,t){"use strict";t.r(s);var i=t(5893),a=t(6997),n=t(1151);t(5675);var l=t(1236);function r(e){let s=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3",pre:"pre",span:"span"},(0,n.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{children:"Start on system boot"}),"\n",(0,i.jsxs)(s.p,{children:["In this section, we'll cover how to configure Tipi to start on system boot.\nThese steps assume a ",(0,i.jsx)(s.code,{children:"systemd"})," distro (the majority of common Linux distributions use ",(0,i.jsx)(s.code,{children:"systemd"})," as the init manager). To determine whether your system uses ",(0,i.jsx)(s.code,{children:"systemd"}),", run the command ",(0,i.jsx)(s.code,{children:"sudo systemctl status"})," - if it displays a tree of daemons, you have ",(0,i.jsx)(s.code,{children:"systemd"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"add-tipi-to-systemd",children:"Add Tipi to systemd"}),"\n",(0,i.jsxs)(l.Rg,{children:[(0,i.jsx)(s.h3,{id:"create-a-service-configuration-file",children:"Create a service configuration file"}),(0,i.jsx)(s.h1,{}),(0,i.jsxs)(s.p,{children:["Create the file in ",(0,i.jsx)(s.code,{children:"/etc/systemd/system"}),":"]}),(0,i.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,i.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"sudo"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"touch"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"/etc/systemd/system/tipi.service"})]})})}),(0,i.jsx)(l.UW,{children:(0,i.jsx)(s.p,{children:"This path may vary according to your distribution."})}),(0,i.jsx)(s.h3,{id:"edit-the-file",children:"Edit the file"}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"sudo nano /etc/systemd/system/tipi.service"}),", and paste in this config:"]}),(0,i.jsx)(s.pre,{"data-language":"text","data-theme":"default",children:(0,i.jsxs)(s.code,{"data-language":"text","data-theme":"default",children:[(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"[Unit]"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Description=tipi"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Requires=docker.service multi-user.target"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"After=docker.service network-online.target dhcpd.service"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"[Service]"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Restart=always"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"RemainAfterExit=yes"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"WorkingDirectory=/usr/bin/runtipi"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"ExecStart=/usr/bin/runtipi/scripts/start.sh"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"ExecStop=/usr/bin/runtipi/scripts/stop.sh"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"[Install]"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"WantedBy=multi-user.target"})})]})}),(0,i.jsx)(l.UW,{children:(0,i.jsxs)(s.p,{children:["Replace ",(0,i.jsx)(s.code,{children:"/usr/bin/runtipi"})," with the full path to wherever you installed Tipi."]})}),(0,i.jsx)(s.h3,{id:"update-the-systemd-configuration",children:"Update the systemd configuration:"}),(0,i.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,i.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"sudo"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"systemctl"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"daemon-reload"})]})})}),(0,i.jsx)(s.h3,{id:"enable-the-service",children:"Enable the service:"}),(0,i.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,i.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"sudo"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"systemctl"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"enable"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"tipi"})]})})}),(0,i.jsx)(s.h3,{id:"test-the-service-configuration",children:"Test the service configuration:"}),(0,i.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,i.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"sudo"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"systemctl"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"status"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"tipi"})]})})}),(0,i.jsx)(s.pre,{"data-language":"text","data-theme":"default",children:(0,i.jsxs)(s.code,{"data-language":"text","data-theme":"default",children:[(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"● foo.service - foo"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"     Loaded: loaded (/etc/systemd/system/tipi.service; disabled; vendor preset: enabled)"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"     Active: inactive (dead)"})})]})}),(0,i.jsx)(s.h3,{id:"reboot-your-system",children:"Reboot your system"}),(0,i.jsxs)(s.p,{children:["Test that Tipi starts up. If this all worked, you should now be able to manage tipi with ",(0,i.jsx)(s.code,{children:"systemctl"}),":"]}),(0,i.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,i.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"sudo"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"systemctl"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"status"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"tipi"})]})})}),(0,i.jsx)(s.pre,{"data-language":"text","data-theme":"default",children:(0,i.jsxs)(s.code,{"data-language":"text","data-theme":"default",children:[(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"● tipi.service - tipi"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"     Loaded: loaded (/etc/systemd/system/tipi.service; enabled; vendor preset: enabled)"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"     Active: active (exited) since Wed 2023-02-22 00:43:34 GMT; 4 days ago"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"   Main PID: 11537 (code=exited, status=0/SUCCESS)"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      Tasks: 1 (limit: 4915)"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        CPU: 4d 11h 24min 33.300s"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"     CGroup: /system.slice/tipi.service"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"             └─11647 fswatch -0 /usr/bin/runtipi/state/events"})})]})})]})]})}s.default=(0,a.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,n.ah)(),e.components);return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(r,{...e})}):r(e)},pageOpts:{filePath:"pages/docs/guides/start-on-system-boot.mdx",route:"/docs/guides/start-on-system-boot",headings:[{depth:1,value:"Start on system boot",id:"start-on-system-boot"},{depth:2,value:"Add Tipi to systemd",id:"add-tipi-to-systemd"},{depth:3,value:"Create a service configuration file",id:"create-a-service-configuration-file"},{depth:1,value:"",id:""},{depth:3,value:"Edit the file",id:"edit-the-file"},{depth:3,value:"Update the systemd configuration:",id:"update-the-systemd-configuration"},{depth:3,value:"Enable the service:",id:"enable-the-service"},{depth:3,value:"Test the service configuration:",id:"test-the-service-configuration"},{depth:3,value:"Reboot your system",id:"reboot-your-system"}],timestamp:1689351904e3,title:"Start on System Boot"},pageNextRoute:"/docs/guides/start-on-system-boot"})}},function(e){e.O(0,[997,774,888,179],function(){return e(e.s=7728)}),_N_E=e.O()}]);