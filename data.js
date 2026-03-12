// 802.11r Known Compatibility Issues Database
// Each entry: { chipset, model, manufacturer, chipsetManufacturer, issueText, sourceUrl, sourceLabel }

const issueData = [

  // ===========================
  // APPLE
  // ===========================
  {
    chipset: "Apple Custom Wireless SoC (iPhone 12/13 series)",
    model: "iPhone 12, iPhone 12 Mini, iPhone 13, iPhone 13 Mini",
    manufacturer: "Apple",
    chipsetManufacturer: "Apple",
    issueText: "Devices complete FT authentication in AP logs but disconnect shortly after roaming. Phone sticks to initial AP after ~30 minutes regardless of signal quality. Suspected firmware bug. Partially resolved in iOS 18.1 (October 2024).",
    sourceUrl: "https://forum.openwrt.org/t/iphone-13-mini-issues-with-802-11r/114989",
    sourceLabel: "OpenWrt Forum"
  },
  {
    chipset: "Apple Wireless Chipset (pre-iOS 18.1)",
    model: "iPhone and iPad (all models running iOS/iPadOS < 18.1)",
    manufacturer: "Apple",
    chipsetManufacturer: "Apple",
    issueText: "Devices running WPA3-Personal (SAE) with 802.11r (FT-SAE) enabled fail to roam or fail to connect entirely. Long-standing incompatibility between FT-SAE and Apple's wireless stack. Fixed in iOS 18.1.",
    sourceUrl: "https://forum.openwrt.org/t/ios-18-1-fixes-wpa3-802-11r/212653",
    sourceLabel: "OpenWrt Forum"
  },
  {
    chipset: "Apple Wireless Chipset",
    model: "iPad (various models), iPhone (various models)",
    manufacturer: "Apple",
    chipsetManufacturer: "Apple",
    issueText: "Devices fail to roam to an AP with better signal. Lose internet connectivity and require manually toggling Wi-Fi off and on to force reconnection. Reported on WPA2 networks with 802.11r enabled.",
    sourceUrl: "https://discussions.apple.com/thread/253570872",
    sourceLabel: "Apple Community"
  },
  {
    chipset: "Apple Wireless Chipset",
    model: "iPhone (various)",
    manufacturer: "Apple",
    chipsetManufacturer: "Apple",
    issueText: "When IPv6 is enabled on a network alongside 802.11r, iPhones fail to roam properly between APs. Notable interaction causing roaming failure specifically with dual-stack (IPv4+IPv6) networks.",
    sourceUrl: "https://airheads.hpe.com/discussion/iphone-roaming-80211r-and-ipv6",
    sourceLabel: "Aruba Airheads"
  },
  {
    chipset: "Apple Wireless Chipset",
    model: "iPad (multiple models)",
    manufacturer: "Apple",
    chipsetManufacturer: "Apple",
    issueText: "iPads unable to connect to WPA3 SSIDs when 802.11r (FT-SAE) is enabled on Aruba infrastructure. Disabling FT-SAE or downgrading to WPA2+FT-PSK resolves the issue.",
    sourceUrl: "https://airheads.hpe.com/discussion/ios-ipads-unable-to-connect-to-wpa3-ssid-with-80211r",
    sourceLabel: "Aruba Airheads"
  },
  {
    chipset: "Apple Wireless Chipset (M2)",
    model: "Mac Pro (M2, 2023)",
    manufacturer: "Apple",
    chipsetManufacturer: "Apple",
    issueText: "M2 Mac Pro cannot connect to Wi-Fi when 802.11r is enabled on the access point. Disabling 802.11r restores connectivity.",
    sourceUrl: "https://discussions.apple.com/thread/254629081",
    sourceLabel: "Apple Community"
  },

  // ===========================
  // BROADCOM
  // ===========================
  {
    chipset: "Broadcom BCM4334",
    model: "Samsung GT-N7100 (Galaxy Note II)",
    manufacturer: "Samsung",
    chipsetManufacturer: "Broadcom",
    issueText: "Cannot connect to any Wi-Fi SSID when 802.11r Fast Transition is enabled on the router. The device does not recognize the FT AKM suite added to the RSN Information Element in beacon/probe frames, causing association refusal.",
    sourceUrl: "https://help.keenetic.com/hc/en-us/articles/360014698040-Why-can-t-my-device-connect-to-Wi-Fi-when-my-router-has-Fast-Transition-802-11r-enabled",
    sourceLabel: "Keenetic Support"
  },
  {
    chipset: "Broadcom (Galaxy Note 10.1 era)",
    model: "Samsung GT-N8000 (Galaxy Note 10.1)",
    manufacturer: "Samsung",
    chipsetManufacturer: "Broadcom",
    issueText: "Cannot connect to any SSID with 802.11r enabled. The older supplicant driver does not parse the FT AKM suite in the beacon RSN-IE and refuses association.",
    sourceUrl: "https://help.keenetic.com/hc/en-us/articles/360014698040-Why-can-t-my-device-connect-to-Wi-Fi-when-my-router-has-Fast-Transition-802-11r-enabled",
    sourceLabel: "Keenetic Support"
  },
  {
    chipset: "Broadcom (Sony Android TV internal)",
    model: "Sony Android TV XH9505 (2019–2020 models)",
    manufacturer: "Sony",
    chipsetManufacturer: "Broadcom",
    issueText: "After the Android 10 update, Sony Android TVs cannot connect to Wi-Fi mesh networks that have 802.11r enabled. The TV's supplicant does not support FT segments in beacon frames, causing association failure. Disabling 802.11r restores connectivity.",
    sourceUrl: "https://community.sony.co.uk/t5/android-tv/android-10-update-breaking-wifi-connections/td-p/3931855",
    sourceLabel: "Sony Community UK"
  },

  // ===========================
  // INTEL
  // ===========================
  {
    chipset: "Intel PRO/Wireless 3945ABG",
    model: "Dell, HP, Lenovo ThinkPad laptops (2004–2008 era)",
    manufacturer: "Intel",
    chipsetManufacturer: "Intel",
    issueText: "The driver does not understand FT AKM suite entries in RSN Information Elements and cannot associate with any SSID broadcasting 802.11r. The legacy iwlegacy Linux driver does not support FT either. Hardware-generation limitation — cannot be patched.",
    sourceUrl: "https://help.keenetic.com/hc/en-us/articles/360014698040-Why-can-t-my-device-connect-to-Wi-Fi-when-my-router-has-Fast-Transition-802-11r-enabled",
    sourceLabel: "Keenetic Support"
  },
  {
    chipset: "Intel Wireless WiFi Link 4965AGN",
    model: "Dell XPS, HP Compaq, Lenovo ThinkPad T/X series (2007–2010)",
    manufacturer: "Intel",
    chipsetManufacturer: "Intel",
    issueText: "Driver-level incompatibility: the supplicant stack does not parse FT AKM suites in beacons or probe responses, refusing to connect to any SSID with 802.11r enabled. Cannot be patched — hardware-generation limitation.",
    sourceUrl: "https://help.keenetic.com/hc/en-us/articles/360014698040-Why-can-t-my-device-connect-to-Wi-Fi-when-my-router-has-Fast-Transition-802-11r-enabled",
    sourceLabel: "Keenetic Support"
  },
  {
    chipset: "Intel Wi-Fi 6 AX200 (Cyclone Peak)",
    model: "Widespread: Dell, HP, Lenovo, ASUS, MSI laptops with AX200",
    manufacturer: "Intel",
    chipsetManufacturer: "Intel",
    issueText: "On Windows 10, the AX200 sends multiple PMK IDs during 802.1x EAP-TLS authentication with 802.11r enabled, causing the AP to issue a de-authentication ('EAPOL Invalid MIC' errors). After PMK cache expiry (~12 hours), the client sends an EAP start but the AP immediately de-auths, causing 3 retries before a full reset.",
    sourceUrl: "https://community.intel.com/t5/Wireless/AX200-802-11r-windows-10-PMK-Caching/m-p/1293980",
    sourceLabel: "Intel Community"
  },
  {
    chipset: "Intel Wi-Fi 6 AX201 / AC 9560",
    model: "Laptops with AX201 or 9560 (10th/11th gen Intel platforms)",
    manufacturer: "Intel",
    chipsetManufacturer: "Intel",
    issueText: "When connecting to a Cisco 9800 WLC with 802.11r, the adapter is not recognized as 802.11r-capable after roaming from another SSID. The WLC retains a stale PMKID entry for the client. Resolution requires disabling and re-enabling the adapter and clearing the RSN PMKID on the controller.",
    sourceUrl: "https://community.intel.com/t5/Wireless/Intel-Drivers-Cisco-9800-wireless-controllers-and-802-11r/m-p/1672600",
    sourceLabel: "Intel Community"
  },
  {
    chipset: "Intel Wi-Fi 6 AX200 / AX201 (Windows 11 + KB5032288)",
    model: "Windows 11 laptops with AX200/AX201 on enterprise 802.1x networks",
    manufacturer: "Intel / Microsoft",
    chipsetManufacturer: "Intel",
    issueText: "Windows 11 security update KB5032288 (November 2023) broke Wi-Fi connectivity on 802.1x enterprise networks with 802.11r enabled for Intel and Qualcomm adapters. Widely impacted university eduroam networks. Microsoft acknowledged the bug; fixed in the January 2024 cumulative update.",
    sourceUrl: "https://www.tomshardware.com/software/security-software/windows-11-security-patch-breaks-wi-fi-on-windows-11-pcs-with-qualcomm-80211r-wi-fi-module",
    sourceLabel: "Tom's Hardware"
  },
  {
    chipset: "All Intel / any wireless adapter (Windows 10/11)",
    model: "Any Windows 10 or Windows 11 device",
    manufacturer: "Microsoft (OS-level constraint)",
    chipsetManufacturer: "Intel",
    issueText: "Windows 10 and 11 only support 802.11r over 802.1x (WPA2/WPA3-Enterprise) networks. 802.11r over WPA2-PSK, WPA3-Personal, and Open networks is not supported at the OS level. Windows clients cannot use 802.11r in home or small-business PSK environments regardless of adapter capabilities.",
    sourceUrl: "https://learn.microsoft.com/en-us/windows-hardware/drivers/network/fast-roaming-with-802-11k--802-11v--and-802-11r",
    sourceLabel: "Microsoft Learn"
  },

  // ===========================
  // QUALCOMM
  // ===========================
  {
    chipset: "Qualcomm QCA61x4A / QCA6174 / QCA9377",
    model: "Windows 11 laptops with Qualcomm Wi-Fi modules",
    manufacturer: "Qualcomm / Microsoft",
    chipsetManufacturer: "Qualcomm",
    issueText: "Windows 11 update KB5032288 (November 2023) caused Qualcomm Wi-Fi adapters to fail on 802.1x networks with 802.11r enabled. Multiple universities (including Dutch institutions) reported campus-wide connectivity failures. Qualcomm adapters were disproportionately affected. Fixed in January 2024 cumulative update.",
    sourceUrl: "https://learn.microsoft.com/en-us/answers/questions/4068114/qualcomm-wifi-adapter-problems-on-802-11r-wlans-af",
    sourceLabel: "Microsoft Q&A"
  },
  {
    chipset: "Qualcomm QCA6390 (SDM855 platform)",
    model: "Xiaomi Mi 9",
    manufacturer: "Xiaomi",
    chipsetManufacturer: "Qualcomm",
    issueText: "The Mi 9 appears to roam successfully briefly, then disconnects and initiates a brand-new full authentication instead of completing the FT handshake, causing 2–3 second network interruptions. Also reported to lose internet access after roaming (connected to Wi-Fi but cannot reach gateway). Reproducible ~99% of the time.",
    sourceUrl: "https://xdaforums.com/t/802-11r-wifi-roaming-doesnt-seem-to-work-for-mi-9.4141153/",
    sourceLabel: "XDA Forums"
  },
  {
    chipset: "Qualcomm SDM855 Wi-Fi (Snapdragon 855)",
    model: "Xiaomi Mi 9 SE, Mi 9T, Mi 9T Pro, Mi 9 Lite",
    manufacturer: "Xiaomi",
    chipsetManufacturer: "Qualcomm",
    issueText: "802.11r fast roaming has never reliably worked on the Mi 9 family. Devices either fail to roam at all, or roam but lose internet connectivity. Issue persisted across multiple MIUI firmware versions.",
    sourceUrl: "https://c.mi.com/oc/thread-3254358-1-0.html?mobile=no",
    sourceLabel: "Xiaomi Community"
  },
  {
    chipset: "Qualcomm QCA6390 (SM8250 / Snapdragon 865)",
    model: "OnePlus 8T (LineageOS)",
    manufacturer: "OnePlus",
    chipsetManufacturer: "Qualcomm",
    issueText: "802.11r fast roaming does not work. When moving toward a closer AP, the device fails to initiate an FT roam and either stays on the original AP or performs a full re-authentication causing visible disconnection. Tracked in official LineageOS issue tracker.",
    sourceUrl: "https://gitlab.com/LineageOS/issues/android/-/issues/6428",
    sourceLabel: "LineageOS GitLab #6428"
  },
  {
    chipset: "Qualcomm SDM845 (Snapdragon 845)",
    model: "Xiaomi Pocophone F1 (LineageOS)",
    manufacturer: "Xiaomi",
    chipsetManufacturer: "Qualcomm",
    issueText: "Roaming failures with WPA3 and 802.11r enabled. The device can roam in WPA2-only environments but fails to complete FT transitions when 802.11w (PMF) is required (as in WPA3-SAE). Tracked in LineageOS issue tracker.",
    sourceUrl: "https://gitlab.com/LineageOS/issues/android/-/issues/3770",
    sourceLabel: "LineageOS GitLab #3770"
  },

  // ===========================
  // REALTEK
  // ===========================
  {
    chipset: "Realtek RTL8821CE",
    model: "HP 15, HP Pavilion, ASUS VivoBook (and other OEM devices)",
    manufacturer: "Realtek",
    chipsetManufacturer: "Realtek",
    issueText: "Refuses to connect to any network with 802.11r enabled. On Linux (out-of-tree driver), the device fails to associate when FT AKMs are present in the RSN-IE. No workaround other than disabling 802.11r on the AP. The in-kernel rtw88 driver has improved but does not fully resolve FT.",
    sourceUrl: "https://bbs.archlinux.org/viewtopic.php?id=249011",
    sourceLabel: "Arch Linux Forums"
  },
  {
    chipset: "Realtek RTL8822CE",
    model: "Steam Deck (Valve), HP Gaming Desktops, ASUS laptops",
    manufacturer: "Realtek / Valve",
    chipsetManufacturer: "Realtek",
    issueText: "Does not work properly with 802.11r fast roaming. The device either fails to roam or experiences connectivity drops when FT is active. Intel Wi-Fi 6 AX210/AX211 adapters on the same network function correctly, isolating the issue to the Realtek chipset.",
    sourceUrl: "https://forum.openwrt.org/t/fast-roaming-802-11r-not-working-on-every-device/148727",
    sourceLabel: "OpenWrt Forum"
  },
  {
    chipset: "Realtek RTL8822BE",
    model: "Lenovo ThinkPad E480, E580 (and other Lenovo models)",
    manufacturer: "Lenovo",
    chipsetManufacturer: "Realtek",
    issueText: "When connected to Cisco Meraki MR46 APs with 802.11r enabled, shows frequent 'client has left AP' events in Meraki logs every few seconds. Connection appears up from the client side but data does not flow reliably. Workaround: revert to older Realtek drivers (August 2021 build).",
    sourceUrl: "https://community.meraki.com/t5/Wireless/Meraki-MR46-and-Lenovo-E480-with-Realtek-8822BE-Wireless-LAN-802/m-p/133586",
    sourceLabel: "Cisco Meraki Community"
  },

  // ===========================
  // MEDIATEK
  // ===========================
  {
    chipset: "MediaTek MT6768 / MT6765 / MT6769 (Helio G/P series)",
    model: "Samsung Galaxy A41, Galaxy A12, Galaxy A13 (MediaTek variants)",
    manufacturer: "Samsung / MediaTek",
    chipsetManufacturer: "MediaTek",
    issueText: "MediaTek mid-range chipsets do not implement 802.11r at all. Devices remain stuck to their initial AP even when signal degrades to unusable levels. Samsung A variants with Snapdragon SoCs of the same model roam correctly — confirming this is a chipset-level omission, not a software bug.",
    sourceUrl: "https://eu.community.samsung.com/t5/galaxy-a-series/wifi-802-11-k-and-802-11-r-support/td-p/3448796",
    sourceLabel: "Samsung Community EU"
  },
  {
    chipset: "MediaTek MT6768 / MT6769 (Helio G/P mid-range)",
    model: "Samsung Galaxy A41, A12, A13 (MediaTek variant)",
    manufacturer: "MediaTek / Samsung",
    chipsetManufacturer: "MediaTek",
    issueText: "Testing on Ubiquiti mesh networks confirmed MediaTek-based Samsung Galaxy A13 (MT6769) never roamed while a Snapdragon Galaxy A variant roamed correctly. 802.11r is entirely absent from these chipsets — a feature omission, not a defect.",
    sourceUrl: "https://community.ui.com/questions/android-and-mediatek-chipsets-fast-roaming-ubiquiti-no/9514b7c2-fa3c-4b68-aeb7-709af9d365f7",
    sourceLabel: "Ubiquiti Community"
  },
  {
    chipset: "MediaTek MT7986 (AP/router chipset, mt76 driver)",
    model: "GL.iNet, Banana Pi, and other MT7986-based Wi-Fi 6 routers/APs",
    manufacturer: "MediaTek (AP side)",
    chipsetManufacturer: "MediaTek",
    issueText: "When 802.11r FT is enabled on MT7986-based APs running the mt76 kernel driver (OpenWrt), clients experience severe throughput degradation after an FT transition event. This is a bug in the mt76 driver's handling of the FT state machine, not a client-side issue. Active regression in 2024–2025.",
    sourceUrl: "https://forum.openwrt.org/t/802-11r-ft-roaming-causes-serious-speed-drop-mt76/242042",
    sourceLabel: "OpenWrt Forum"
  },

  // ===========================
  // MARVELL
  // ===========================
  {
    chipset: "Marvell AVASTAR 88W8897 (Wireless-AC)",
    model: "Microsoft Surface Pro 3, Surface Pro 4, Surface Pro 5 (2017)",
    manufacturer: "Microsoft / Marvell",
    chipsetManufacturer: "Marvell",
    issueText: "Surface Pro devices with the Marvell AVASTAR chipset cannot connect to SSIDs with 802.11r enabled. Synology and other vendors documented this as a known incompatibility. Disabling PMF (802.11w) on the AP allows the Surface to connect. Microsoft later switched Surface Pro to Qualcomm/Killer NICs.",
    sourceUrl: "https://forums.windowscentral.com/threads/802-11r-not-supported-in-2017-surface-pro.482419/",
    sourceLabel: "Windows Central Forum"
  },
  {
    chipset: "Marvell AVASTAR 88W8897",
    model: "Microsoft Surface Pro 3",
    manufacturer: "Microsoft / Marvell",
    chipsetManufacturer: "Marvell",
    issueText: "Cannot connect to Ubiquiti UniFi AP-AC LR when 802.11r is enabled. Confirmed as a chipset incompatibility — the AVASTAR supplicant implementation fails to handle FT Information Elements correctly.",
    sourceUrl: "https://community.ui.com/questions/Microsoft-Surface-Pro3-with-Marvell-AVARSTAR-chip-cannot-connect-to-Unifi-AP-AC-LR/f5690127-c8e3-4e9a-9652-16658474496d",
    sourceLabel: "Ubiquiti Community"
  },

  // ===========================
  // GOOGLE / ANDROID (AOSP)
  // ===========================
  {
    chipset: "Android Wi-Fi Stack (AOSP — platform-level)",
    model: "Android devices broadly (multiple generations)",
    manufacturer: "Google / Android Open Source Project",
    chipsetManufacturer: "Google / Android",
    issueText: "Long-standing Android platform-level issue where devices do not properly support or perform 802.11r FT roaming. Bug opened as early as the Android 4.x timeframe and not systematically resolved for many Android versions. Many OEMs ship Android devices with the 802.11r code path disabled or broken.",
    sourceUrl: "https://issuetracker.google.com/issues/36929997",
    sourceLabel: "Google Issue Tracker #36929997"
  },
  {
    chipset: "Qualcomm / Exynos (Android 13 devices)",
    model: "Samsung Galaxy S22 series, Google Pixel (Android 13)",
    manufacturer: "Samsung / Google",
    chipsetManufacturer: "Google / Android",
    issueText: "Android 13 devices experience periodic, nearly timer-based disconnection and reconnection on 802.11r networks. Devices drop and rejoin at regular intervals even while streaming video. Behavior confirmed on multiple Android 13 phones on the same network.",
    sourceUrl: "https://forum.openwrt.org/t/802-11r-roaming-disconnects-on-android/241835",
    sourceLabel: "OpenWrt Forum"
  },
  {
    chipset: "Various (multi-device — Android on UniFi APs)",
    model: "Multiple Android devices (LineageOS)",
    manufacturer: "Various",
    chipsetManufacturer: "Google / Android",
    issueText: "Android devices running LineageOS broadly fail to perform 802.11r fast roaming when connected to Ubiquiti UniFi APs. Devices cannot roam at all or drop and full-re-authenticate rather than using FT. iOS devices on the same network roam correctly.",
    sourceUrl: "https://gitlab.com/LineageOS/issues/android/-/issues/3430",
    sourceLabel: "LineageOS GitLab #3430"
  },

  // ===========================
  // TP-LINK
  // ===========================
  {
    chipset: "Atheros / MediaTek (TL-WR802N internal)",
    model: "TP-Link TL-WR802N V2 (wireless client / extender mode)",
    manufacturer: "TP-Link",
    chipsetManufacturer: "TP-Link",
    issueText: "When configured as a wireless client, the TL-WR802N V2 cannot connect to UniFi APs with Fast Roaming (802.11r) enabled. The device's client supplicant does not support FT association.",
    sourceUrl: "https://community.ui.com/questions/TL-WR802N-V2-Incompatible-with-Fast-Roaming-802-11r/d8e414c1-70e8-4e18-9409-170a1f873f65",
    sourceLabel: "Ubiquiti Community"
  },

  // ===========================
  // MULTI-VENDOR / INFRASTRUCTURE
  // ===========================
  {
    chipset: "Multiple (hostapd + WPA3-SAE clients)",
    model: "Many Android and iOS devices on WPA3 networks",
    manufacturer: "Multiple (infrastructure + client)",
    chipsetManufacturer: "Multi-Vendor",
    issueText: "Combining WPA3-SAE with 802.11r (FT-SAE) causes roaming to break for many clients. The interaction between 802.11w (PMF, required for WPA3) and 802.11r creates compatibility failures in hostapd's FT state machine for certain client supplicants. Tracked as OpenWrt GitHub issue #9181.",
    sourceUrl: "https://github.com/openwrt/openwrt/issues/9181",
    sourceLabel: "OpenWrt GitHub #9181"
  },
  {
    chipset: "Multiple (OpenWrt 25.12 / hostapd regression)",
    model: "Android and Apple iPhone devices on OpenWrt 25.12 APs",
    manufacturer: "Multiple",
    chipsetManufacturer: "Multi-Vendor",
    issueText: "In OpenWrt 25.12, 802.11r Fast Transition does not work at all when encryption is set to SAE (WPA3). Clients stop transitioning between APs entirely. Filed as a regression in the OpenWrt issue tracker in early 2025.",
    sourceUrl: "https://github.com/openwrt/openwrt/issues/22200",
    sourceLabel: "OpenWrt GitHub #22200"
  },
  {
    chipset: "All APs with 802.11r enabled (infrastructure side)",
    model: "All clients connecting to unpatched APs (Cisco, Aruba, Ubiquiti, Ruckus, etc.)",
    manufacturer: "Multiple vendors (pre-2017 patch)",
    chipsetManufacturer: "Multi-Vendor",
    issueText: "CVE-2017-13082 (KRACK Attack): An attacker can replay FT Reassociation Request frames to reinstate the pairwise encryption key (PTK-TK), enabling decryption or forging of wireless frames. Design-level flaw in the 802.11r FT handshake. All major vendors issued patches in late 2017. Unpatched networks remain vulnerable.",
    sourceUrl: "https://www.krackattacks.com/",
    sourceLabel: "KRACK Attacks (krackattacks.com)"
  }

];
