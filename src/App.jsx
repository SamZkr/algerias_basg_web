import { useState } from "react";

// ============================================================
// 📸 دليل إضافة الصور — HOW TO ADD REAL PRODUCT PHOTOS
// ============================================================
// 1. في مجلد مشروعك أنشئ папку اسمها /public/images/
// 2. احفظ صورة كل حقيبة بداخلها مثلاً: bag1.jpg, bag2.jpg ...
// 3. في كل منتج أدناه، ضع مسار الصورة في حقل image:
//
//    image: "/images/bag1.jpg"           ← صورة محلية
//    image: "https://i.imgur.com/xxx.jpg" ← رابط خارجي
//
// 4. إذا تركت image: null → يظهر الإيموجي تلقائياً كبديل
//
// ✅ أفضل أحجام للصور: 600×600px أو 800×800px، صيغة JPG/WebP
// ============================================================

const WILAYAS = [
  { code:1,  name:"أدرار",         home:1600, relay:800  },
  { code:2,  name:"الشلف",         home:900,  relay:450  },
  { code:3,  name:"الأغواط",       home:1200, relay:600  },
  { code:4,  name:"أم البواقي",    home:900,  relay:350  },
  { code:6,  name:"بجاية",         home:850,  relay:400  },
  { code:7,  name:"بسكرة",         home:850,  relay:350  },
  { code:8,  name:"بشار",          home:1400, relay:800  },
  { code:9,  name:"البليدة",       home:800,  relay:350  },
  { code:10, name:"البويرة",       home:850,  relay:400  },
  { code:11, name:"تمنراست",       home:1600, relay:1000 },
  { code:12, name:"تبسة",          home:800,  relay:600  },
  { code:13, name:"تلمسان",        home:900,  relay:350  },
  { code:14, name:"تيارت",         home:950,  relay:400  },
  { code:15, name:"تيزي وزو",      home:850,  relay:400  },
  { code:16, name:"الجزائر",       home:750,  relay:350  },
  { code:17, name:"الجلفة",        home:1200, relay:600  },
  { code:18, name:"جيجل",          home:850,  relay:400  },
  { code:19, name:"سطيف",          home:850,  relay:350  },
  { code:20, name:"سعيدة",         home:1000, relay:400  },
  { code:21, name:"سكيكدة",        home:850,  relay:400  },
  { code:22, name:"سيدي بلعباس",  home:900,  relay:400  },
  { code:23, name:"عنابة",         home:850,  relay:350  },
  { code:24, name:"قالمة",         home:850,  relay:400  },
  { code:25, name:"قسنطينة",       home:850,  relay:400  },
  { code:26, name:"المدية",        home:850,  relay:400  },
  { code:27, name:"مستغانم",       home:900,  relay:400  },
  { code:28, name:"المسيلة",       home:900,  relay:350  },
  { code:29, name:"معسكر",         home:950,  relay:400  },
  { code:30, name:"ورقلة",         home:1200, relay:600  },
  { code:31, name:"وهران",         home:900,  relay:350  },
  { code:32, name:"البيض",         home:1400, relay:600  },
  { code:33, name:"إليزي",         home:1800, relay:1200 },
  { code:34, name:"برج بوعريريج", home:850,  relay:400  },
  { code:35, name:"بومرداس",       home:650,  relay:400  },
  { code:36, name:"الطارف",        home:850,  relay:400  },
  { code:37, name:"تندوف",         home:1600, relay:1000 },
  { code:38, name:"تيسمسيلت",     home:950,  relay:400  },
  { code:39, name:"الوادي",        home:1000, relay:600  },
  { code:40, name:"خنشلة",         home:800,  relay:350  },
  { code:41, name:"سوق أهراس",    home:850,  relay:400  },
  { code:42, name:"تيبازة",        home:850,  relay:350  },
  { code:43, name:"ميلة",          home:800,  relay:350  },
  { code:44, name:"عين الدفلى",   home:900,  relay:400  },
  { code:45, name:"النعامة",       home:1400, relay:800  },
  { code:46, name:"عين تموشنت",   home:950,  relay:400  },
  { code:47, name:"غرداية",        home:1200, relay:600  },
  { code:48, name:"غليزان",        home:950,  relay:400  },
];

const PRODUCTS = [
  { id:1, name:"المجموعة الأسطورية",    category:"tote",    price:800, badge:"الأكثر مبيعاً", badgeColor:"#e67e22", emoji:"🌅", color:"#FEE2C8", image: "/images/pack.jpeg", desc:"تجميعة ثلاثة حقائب مع محفظة نقود" },

  { id:5, name:"حقيبة وردية بجيب",             category:"shopper", price:300,  badge:"جديد",            badgeColor:"#27ae60", emoji:"☕", color:"#FDE68A", image: "/images/pink_bag.jpg", desc:"للفتيات الأنيقات." },
 
];

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyMMMf57HZIpp67Ry6t0lE1GAaY3MyNjD5FUzCri-x-nvjMLBrH3xqb4YGwdyS64lQo1w/exec";

function ProductImage({ product, height=230 }) {
  const [err, setErr] = useState(false);
  if (product.image && !err) {
    return <img src={product.image} alt={product.name} onError={()=>setErr(true)}
      style={{ width:"100%", height, objectFit:"cover", display:"block" }} />;
  }
  return (
    <div style={{ height, background:`linear-gradient(145deg,${product.color},${product.color}bb)`,
      display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:8, position:"relative" }}>
      <span style={{ fontSize:Math.round(height*0.36) }}>{product.emoji}</span>
      <span style={{ fontSize:10, background:"rgba(0,0,0,0.2)", color:"#fff",
        padding:"3px 12px", borderRadius:20, fontWeight:700 }}>
        📸 أضف صورة في الكود
      </span>
    </div>
  );
}

export default function AlgiersBags() {
  const [category,    setCategory]   = useState("all");
  const [search,      setSearch]     = useState("");
  const [cart,        setCart]       = useState([]);
  const [showCart,    setShowCart]   = useState(false);
  const [step,        setStep]       = useState(0);
  const [delType,     setDelType]    = useState("home");
  const [submitting,  setSubmitting] = useState(false);
  const [wishlist,    setWishlist]   = useState([]);
  const [form,        setForm]       = useState({ name:"", phone:"", wilaya:"", address:"" });
  const [toast,       setToast]      = useState(null);

  const notify = (msg) => { setToast(msg); setTimeout(()=>setToast(null),2400); };

  const filtered = PRODUCTS.filter(p =>
    (category==="all"||p.category===category) &&
    (p.name.includes(search)||p.desc.includes(search))
  );

  const addToCart = (p) => {
    setCart(prev=>{
      const ex=prev.find(i=>i.id===p.id);
      return ex ? prev.map(i=>i.id===p.id?{...i,qty:i.qty+1}:i) : [...prev,{...p,qty:1}];
    });
    notify(`✅ "${p.name}" أُضيفت للسلة`);
  };
  const updQty = (id,d) => setCart(prev=>prev.map(i=>i.id===id?{...i,qty:Math.max(0,i.qty+d)}:i).filter(i=>i.qty>0));
  const toggleWish = (id) => setWishlist(p=>p.includes(id)?p.filter(x=>x!==id):[...p,id]);

  const cartTotal    = cart.reduce((s,i)=>s+i.price*i.qty,0);
  const cartCount    = cart.reduce((s,i)=>s+i.qty,0);
  const selW         = WILAYAS.find(w=>w.name===form.wilaya);
  const delCost      = selW ? (delType==="home"?selW.home:selW.relay) : 0;
  const grandTotal   = cartTotal + delCost;

  const handleSubmit = async () => {
    if(!form.name||!form.phone||!form.wilaya||!form.address){ notify("⚠️ يرجى ملء جميع الحقول"); return; }
    setSubmitting(true);
    try {
      await fetch(SCRIPT_URL,{ method:"POST", mode:"no-cors", headers:{"Content-Type":"application/json"},
        body:JSON.stringify({ name:form.name, phone:form.phone, wilaya:form.wilaya, address:form.address,
          deliveryType:delType==="home"?"توصيل للمنزل":"نقطة توزيع",
          items:cart.map(i=>`${i.name} (×${i.qty})`).join(", "), total:grandTotal }) });
      setCart([]); setStep(3);
    } catch { notify("❌ فشل الإرسال، حاول مجدداً"); }
    finally { setSubmitting(false); }
  };

  const CSS = `
    @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&display=swap');
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    :root{
      --gold:#C8913A;--gold-l:#F5DFA8;--gold-bg:#FFFBF3;
      --dark:#111;--gray:#6B7280;--light:#F9F8F6;--border:#E8E8E8;
      --r:14px;--sh:0 4px 24px rgba(0,0,0,.08);
    }
    body{background:var(--light);font-family:'Cairo',sans-serif}
    ::-webkit-scrollbar{width:5px}::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}
    .card{background:#fff;border-radius:var(--r);overflow:hidden;border:1px solid var(--border);
      transition:transform .28s ease,box-shadow .28s ease}
    .card:hover{transform:translateY(-6px);box-shadow:0 18px 48px rgba(0,0,0,.11)}
    .bdark{background:var(--dark);color:#fff;border:none;border-radius:40px;font-family:'Cairo',sans-serif;
      font-weight:700;cursor:pointer;transition:background .2s,transform .15s}
    .bdark:hover{background:#2a2a2a;transform:translateY(-1px)}
    .bgold{background:var(--gold);color:#fff;border:none;border-radius:40px;font-family:'Cairo',sans-serif;
      font-weight:700;cursor:pointer;transition:background .2s,transform .15s}
    .bgold:hover{background:#a8762e;transform:translateY(-1px)}
    .bout{background:transparent;border:2px solid var(--dark);color:var(--dark);border-radius:40px;
      font-family:'Cairo',sans-serif;font-weight:700;cursor:pointer;transition:all .2s}
    .bout:hover{background:var(--dark);color:#fff}
    .ib{background:none;border:none;cursor:pointer;padding:4px;border-radius:50%;transition:transform .15s;
      display:flex;align-items:center;justify-content:center}
    .ib:hover{transform:scale(1.2)}
    .qb{width:32px;height:32px;border-radius:50%;border:1.5px solid var(--border);background:#fff;
      font-size:17px;cursor:pointer;display:flex;align-items:center;justify-content:center;
      transition:border-color .15s,background .15s;font-family:'Cairo',sans-serif;font-weight:800;color:var(--dark)}
    .qb:hover{border-color:var(--dark);background:var(--dark);color:#fff}
    .tab{font-family:'Cairo',sans-serif;font-weight:700;font-size:14px;padding:9px 22px;border-radius:40px;
      border:2px solid var(--border);background:transparent;color:var(--gray);cursor:pointer;transition:all .2s;white-space:nowrap}
    .tab.on{background:var(--dark);color:#fff;border-color:var(--dark)}
    input,select,textarea{font-family:'Cairo',sans-serif;width:100%;padding:13px 16px;border:2px solid var(--border);
      border-radius:10px;font-size:14px;background:#fff;outline:none;color:var(--dark);transition:border-color .2s;direction:rtl}
    input:focus,select:focus,textarea:focus{border-color:var(--gold)}
    label{font-size:12px;font-weight:700;color:var(--gray);display:block;margin-bottom:6px}
    .ov{position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:200;backdrop-filter:blur(4px);animation:fi .2s ease}
    @keyframes fi{from{opacity:0}to{opacity:1}}
    .drawer{position:fixed;top:0;right:0;height:100vh;width:min(440px,100vw);background:#fff;z-index:201;
      display:flex;flex-direction:column;box-shadow:-8px 0 40px rgba(0,0,0,.12);animation:si .28s cubic-bezier(.32,.72,0,1)}
    @keyframes si{from{transform:translateX(100%)}to{transform:translateX(0)}}
    .mow{position:fixed;inset:0;z-index:300;display:flex;align-items:flex-end;justify-content:center;
      background:rgba(0,0,0,.45);backdrop-filter:blur(4px)}
    .modal{background:#fff;border-radius:20px 20px 0 0;max-width:560px;width:100%;
      max-height:92vh;overflow-y:auto;animation:su .3s cubic-bezier(.32,.72,0,1)}
    @keyframes su{from{transform:translateY(60px);opacity:0}to{transform:translateY(0);opacity:1}}
    .dopt{flex:1;border:2.5px solid var(--border);border-radius:12px;padding:14px 10px;
      cursor:pointer;transition:all .2s;text-align:center}
    .dopt.on{border-color:var(--gold);background:var(--gold-bg)}
    .ci{display:flex;gap:12px;padding:14px 0;border-bottom:1px solid var(--border);align-items:center}
    .badge{font-size:10px;font-weight:800;padding:3px 10px;border-radius:20px;color:#fff;letter-spacing:.04em}
    .toast{position:fixed;bottom:86px;left:50%;transform:translateX(-50%);background:var(--dark);
      color:#fff;padding:11px 24px;border-radius:40px;font-size:14px;font-weight:700;z-index:999;
      white-space:nowrap;animation:ti .25s ease,to .25s ease 2s forwards;box-shadow:0 8px 24px rgba(0,0,0,.2)}
    @keyframes ti{from{opacity:0;transform:translateX(-50%) translateY(12px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}
    @keyframes to{from{opacity:1}to{opacity:0}}
    .fbar{position:fixed;bottom:0;left:0;right:0;z-index:100;background:var(--dark);
      padding:14px 20px;display:flex;align-items:center;justify-content:space-between;
      animation:su .3s ease;box-shadow:0 -4px 20px rgba(0,0,0,.15)}
    .mq{overflow:hidden;background:var(--gold);padding:8px 0}
    .mqi{display:inline-block;animation:mq 22s linear infinite;white-space:nowrap}
    @keyframes mq{from{transform:translateX(0)}to{transform:translateX(-50%)}}
    .prog{height:3px;background:var(--gold);transition:width .4s ease;border-radius:4px}
    .sw{position:relative}
    .sw input{padding-right:44px}
    .si{position:absolute;right:15px;top:50%;transform:translateY(-50%);color:var(--gray);font-size:16px;pointer-events:none}
    @media(max-width:640px){
      .g3{grid-template-columns:repeat(2,1fr)!important;gap:12px!important}
    }
    @media(max-width:360px){
      .g3{grid-template-columns:1fr!important}
    }
  `;

  return (
    <div dir="rtl" style={{ fontFamily:"'Cairo',sans-serif", background:"var(--light)", minHeight:"100vh" }}>
      <style>{CSS}</style>

      {/* ── HEADER ─────────────────────────────────────── */}
      <header style={{ background:"#fff", borderBottom:"1px solid var(--border)", position:"sticky", top:0, zIndex:100 }}>
        <div style={{ maxWidth:1140, margin:"0 auto", padding:"13px 20px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <div>
            <p style={{ fontSize:9, color:"var(--gold)", fontWeight:800, letterSpacing:".14em" }}>🇩🇿 صنع في الجزائر</p>
            <h1 style={{ fontSize:21, fontWeight:900, color:"var(--dark)", lineHeight:1.1 }}>حقائب الجزائر</h1>
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <button className="ib" style={{ fontSize:19 }} title="المفضلة">
              ♡ {wishlist.length > 0 && <sup style={{ fontSize:10, color:"#e74c3c", fontWeight:800 }}>{wishlist.length}</sup>}
            </button>
            <button className="bdark" onClick={()=>setShowCart(true)} style={{ padding:"10px 18px", fontSize:13, display:"flex", alignItems:"center", gap:7 }}>
              <span>🛒</span><span>السلة</span>
              {cartCount>0 && <span style={{ background:"var(--gold)", borderRadius:20, minWidth:20, height:20, display:"flex", alignItems:"center", justifyContent:"center", fontSize:10, fontWeight:900 }}>{cartCount}</span>}
            </button>
          </div>
        </div>
        {/* Trust bar */}
        <div style={{ background:"var(--gold-bg)", borderTop:"1px solid var(--gold-l)" }}>
          <div style={{ maxWidth:1140, margin:"0 auto", padding:"7px 20px", display:"flex", gap:20, justifyContent:"center", flexWrap:"wrap" }}>
            {[["✅","دفع عند الاستلام"],["🚚","توصيل لكل الولايات"],["🔄","ضمان الجودة"],["⚡","شحن ياليدين السريع"]].map(([ic,tx])=>(
              <span key={tx} style={{ display:"flex", alignItems:"center", gap:5, fontSize:11, fontWeight:700, whiteSpace:"nowrap" }}>{ic} {tx}</span>
            ))}
          </div>
        </div>
      </header>

      {/* ── HERO ────────────────────────────────────────── */}
      <section style={{ background:"linear-gradient(135deg,#110e07,#2b1c07,#110e07)", padding:"52px 20px 46px", textAlign:"center", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", width:320, height:320, borderRadius:"50%", border:"1px solid rgba(200,145,58,.12)", top:-110, right:-90, pointerEvents:"none" }} />
        <div style={{ position:"absolute", width:220, height:220, borderRadius:"50%", border:"1px solid rgba(200,145,58,.08)", bottom:-90, left:-70, pointerEvents:"none" }} />
        <div className="mq" style={{ position:"absolute", top:0, left:0, right:0, background:"rgba(200,145,58,.1)" }}>
          <span className="mqi" style={{ fontSize:10, color:"var(--gold-l)", fontWeight:700, letterSpacing:".14em" }}>
            {"✦ حقائب مصنوعة يدوياً ✦ تصاميم حصرية ✦ جودة عالية ✦ توصيل لكل الجزائر ✦ دفع عند الاستلام ✦ ".repeat(4)}
          </span>
        </div>
        <div style={{ position:"relative", zIndex:1, marginTop:14 }}>
          <p style={{ fontSize:11, color:"var(--gold)", fontWeight:800, letterSpacing:".18em", marginBottom:14 }}>— المجموعة الجديدة 2026 —</p>
          <h2 style={{ fontSize:"clamp(26px,5.5vw,54px)", fontWeight:900, color:"#fff", lineHeight:1.18, marginBottom:14 }}>
            حقائب تحكي<br/><span style={{ color:"var(--gold)" }}>قصة الجزائر</span>
          </h2>
          <p style={{ fontSize:14, color:"rgba(255,255,255,.6)", maxWidth:440, margin:"0 auto 28px", lineHeight:1.9 }}>
            أضف ما يعجبك للسلة واطلب مباشرة — شحن ياليدين لكل الولايات بأسعار واضحة.
          </p>
          <button className="bgold" onClick={()=>document.getElementById("prods").scrollIntoView({behavior:"smooth"})} style={{ padding:"13px 34px", fontSize:15 }}>
            تصفّح الحقائب ↓
          </button>
        </div>
      </section>

      {/* ── FILTERS ─────────────────────────────────────── */}
      <div style={{ maxWidth:1140, margin:"0 auto", padding:"22px 20px 8px" }}>
        <div style={{ display:"flex", gap:10, flexWrap:"wrap", alignItems:"center", justifyContent:"space-between" }}>
          <div style={{ display:"flex", gap:8 }}>
            {[["all","الكل 🛍️"],["tote","توت"],["shopper","شوبر"]].map(([v,l])=>(
              <button key={v} className={`tab${category===v?" on":""}`} onClick={()=>setCategory(v)}>{l}</button>
            ))}
          </div>
          <div className="sw" style={{ minWidth:220 }}>
            <span className="si">🔍</span>
            <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="ابحثي عن حقيبة..." style={{ borderRadius:40, paddingRight:42 }} />
          </div>
        </div>
        <p style={{ fontSize:11, color:"var(--gray)", marginTop:10, fontWeight:600 }}>{filtered.length} منتج متوفر</p>
      </div>

      {/* ── GRID ────────────────────────────────────────── */}
      <main id="prods" style={{ maxWidth:1140, margin:"0 auto", padding:"14px 20px 120px" }}>
        {filtered.length===0 ? (
          <div style={{ textAlign:"center", padding:"60px 0", color:"var(--gray)" }}>
            <div style={{ fontSize:48 }}>🔍</div>
            <p style={{ fontWeight:700, marginTop:10 }}>لا توجد نتائج</p>
          </div>
        ) : (
          <div className="g3" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20 }}>
            {filtered.map(p => {
              const inC = cart.find(i=>i.id===p.id);
              const wsh = wishlist.includes(p.id);
              return (
                <div key={p.id} className="card">
                  <div style={{ position:"relative" }}>
                    <ProductImage product={p} height={230} />
                    {p.badge && <span className="badge" style={{ position:"absolute", top:11, right:11, background:p.badgeColor||"var(--dark)" }}>{p.badge}</span>}
                    <button className="ib" onClick={()=>toggleWish(p.id)}
                      style={{ position:"absolute", top:9, left:9, fontSize:21, color:wsh?"#e74c3c":"rgba(255,255,255,.85)", textShadow:"0 1px 4px rgba(0,0,0,.3)" }}>
                      {wsh?"❤️":"🤍"}
                    </button>
                  </div>
                  <div style={{ padding:"16px 18px 18px" }}>
                    <p style={{ fontSize:10, color:"var(--gold)", fontWeight:800, letterSpacing:".06em", marginBottom:4 }}>
                      {p.category==="tote"?"حقيبة توت":"حقيبة شوبر"}
                    </p>
                    <h3 style={{ fontSize:16, fontWeight:800, marginBottom:6, lineHeight:1.35, color:"var(--dark)" }}>{p.name}</h3>
                    <p style={{ fontSize:13, color:"var(--gray)", lineHeight:1.75, marginBottom:16, minHeight:38 }}>{p.desc}</p>
                    <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                      <div>
                        <span style={{ fontSize:19, fontWeight:900 }}>{p.price.toLocaleString()}</span>
                        <span style={{ fontSize:12, color:"var(--gray)", fontWeight:700, marginRight:2 }}>دج</span>
                      </div>
                      {inC ? (
                        <div style={{ display:"flex", alignItems:"center", gap:7 }}>
                          <button className="qb" onClick={()=>updQty(p.id,-1)}>−</button>
                          <span style={{ fontSize:16, fontWeight:800, minWidth:18, textAlign:"center" }}>{inC.qty}</span>
                          <button className="qb" onClick={()=>updQty(p.id,+1)}>+</button>
                        </div>
                      ) : (
                        <button className="bdark" onClick={()=>addToCart(p)} style={{ padding:"9px 18px", fontSize:13 }}>+ أضف</button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* ── FLOAT BAR ───────────────────────────────────── */}
      {cartCount>0 && !showCart && step===0 && (
        <div className="fbar">
          <div>
            <p style={{ color:"rgba(255,255,255,.55)", fontSize:11, fontWeight:600 }}>{cartCount} منتج في السلة</p>
            <p style={{ color:"#fff", fontSize:18, fontWeight:900 }}>{cartTotal.toLocaleString()} دج</p>
          </div>
          <button className="bgold" onClick={()=>setStep(1)} style={{ padding:"13px 28px", fontSize:15 }}>اطلبي الآن ←</button>
        </div>
      )}

      {/* ── CART DRAWER ─────────────────────────────────── */}
      {showCart && <>
        <div className="ov" onClick={()=>setShowCart(false)} />
        <div className="drawer">
          <div style={{ padding:"18px 20px", borderBottom:"1px solid var(--border)", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <div>
              <h3 style={{ fontSize:18, fontWeight:900 }}>سلة الطلب 🛒</h3>
              <p style={{ fontSize:11, color:"var(--gray)", fontWeight:600 }}>{cartCount} منتج</p>
            </div>
            <button className="ib" onClick={()=>setShowCart(false)} style={{ fontSize:22, color:"var(--gray)" }}>✕</button>
          </div>
          <div style={{ flex:1, overflowY:"auto", padding:"0 20px" }}>
            {cart.length===0 ? (
              <div style={{ textAlign:"center", padding:"60px 0", color:"var(--gray)" }}>
                <div style={{ fontSize:50, marginBottom:10 }}>🛍️</div>
                <p style={{ fontWeight:700 }}>السلة فارغة</p>
              </div>
            ) : cart.map(item=>(
              <div key={item.id} className="ci">
                <div style={{ width:58, height:58, borderRadius:10, overflow:"hidden", flexShrink:0 }}>
                  {item.image
                    ? <img src={item.image} alt={item.name} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                    : <div style={{ width:"100%", height:"100%", background:item.color, display:"flex", alignItems:"center", justifyContent:"center", fontSize:26 }}>{item.emoji}</div>
                  }
                </div>
                <div style={{ flex:1, minWidth:0 }}>
                  <p style={{ fontWeight:800, fontSize:14, marginBottom:3, lineHeight:1.3 }}>{item.name}</p>
                  <p style={{ fontSize:13, color:"var(--gold)", fontWeight:700 }}>{(item.price*item.qty).toLocaleString()} دج</p>
                </div>
                <div style={{ display:"flex", alignItems:"center", gap:5 }}>
                  <button className="qb" style={{ width:28, height:28, fontSize:14 }} onClick={()=>updQty(item.id,-1)}>−</button>
                  <span style={{ fontWeight:800, minWidth:14, textAlign:"center" }}>{item.qty}</span>
                  <button className="qb" style={{ width:28, height:28, fontSize:14 }} onClick={()=>updQty(item.id,+1)}>+</button>
                </div>
              </div>
            ))}
          </div>
          {cart.length>0 && (
            <div style={{ padding:"16px 20px", borderTop:"1px solid var(--border)", background:"var(--gold-bg)" }}>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:14 }}>
                <span style={{ fontSize:14, fontWeight:700, color:"var(--gray)" }}>المجموع:</span>
                <span style={{ fontSize:18, fontWeight:900 }}>{cartTotal.toLocaleString()} دج</span>
              </div>
              <button className="bgold" onClick={()=>{ setShowCart(false); setStep(1); }} style={{ width:"100%", padding:14, fontSize:15 }}>إتمام الطلب ←</button>
              <button className="bout" onClick={()=>setShowCart(false)} style={{ width:"100%", padding:12, fontSize:13, marginTop:8 }}>مواصلة التسوق</button>
            </div>
          )}
        </div>
      </>}

      {/* ── CHECKOUT MODAL ──────────────────────────────── */}
      {step>0 && (
        <div className="mow" onClick={e=>e.target===e.currentTarget&&setStep(0)}>
          <div className="modal">

            {step===3 ? (
              /* SUCCESS */
              <div style={{ padding:"50px 28px", textAlign:"center" }}>
                <div style={{ fontSize:64, marginBottom:16 }}>🎉</div>
                <h3 style={{ fontSize:22, fontWeight:900, marginBottom:10 }}>تم استلام طلبك!</h3>
                <p style={{ color:"var(--gray)", lineHeight:1.85, fontSize:14, marginBottom:20 }}>
                  شكراً <b style={{color:"var(--dark)"}}>{form.name}</b>! سنتصل بك على<br/>
                  <b style={{color:"var(--gold)",fontSize:16}}>{form.phone}</b> لتأكيد الطلب.
                </p>
                <div style={{ background:"var(--gold-bg)", border:"1px solid var(--gold-l)", borderRadius:12, padding:"16px 20px", textAlign:"right", marginBottom:24 }}>
                  <p style={{ fontSize:11, color:"var(--gold)", fontWeight:800, marginBottom:8 }}>ملخص الطلب</p>
                  {cart.length===0
                    ? <p style={{fontSize:13,color:"var(--gray)"}}>تم إرسال الطلب بنجاح</p>
                    : cart.map(i=>(
                        <div key={i.id} style={{display:"flex",justifyContent:"space-between",fontSize:13,marginBottom:4}}>
                          <span>{i.name} ×{i.qty}</span>
                          <span style={{fontWeight:700}}>{(i.price*i.qty).toLocaleString()} دج</span>
                        </div>
                      ))
                  }
                </div>
                <button className="bgold" onClick={()=>{ setStep(0); setForm({name:"",phone:"",wilaya:"",address:""}); }} style={{ padding:"13px 40px", fontSize:15 }}>
                  تسوّقي مجدداً 🛍️
                </button>
              </div>
            ) : (
              <>
                {/* Modal Header + Progress */}
                <div style={{ padding:"18px 22px 14px", borderBottom:"1px solid var(--border)" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
                    <h3 style={{ fontWeight:900, fontSize:18 }}>{step===1?"مراجعة السلة 🛒":"بيانات التوصيل 📦"}</h3>
                    <button className="ib" onClick={()=>setStep(0)} style={{ fontSize:22, color:"var(--gray)" }}>✕</button>
                  </div>
                  <div style={{ background:"#EFEFEF", borderRadius:4, height:3 }}>
                    <div className="prog" style={{ width: step===1?"50%":"100%" }} />
                  </div>
                  <div style={{ display:"flex", justifyContent:"space-between", marginTop:5 }}>
                    {["مراجعة السلة","بيانات التوصيل"].map((s,i)=>(
                      <span key={s} style={{ fontSize:11, fontWeight:700, color:step>=i+1?"var(--gold)":"var(--gray)" }}>{s}</span>
                    ))}
                  </div>
                </div>

                {step===1 && (
                  <div style={{ padding:"16px 22px" }}>
                    {cart.map(item=>(
                      <div key={item.id} className="ci">
                        <div style={{ width:54, height:54, borderRadius:10, overflow:"hidden", flexShrink:0 }}>
                          {item.image
                            ? <img src={item.image} alt={item.name} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                            : <div style={{ width:"100%", height:"100%", background:item.color, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22 }}>{item.emoji}</div>
                          }
                        </div>
                        <div style={{ flex:1 }}>
                          <p style={{ fontWeight:800, fontSize:14 }}>{item.name}</p>
                          <p style={{ fontSize:12, color:"var(--gold)", fontWeight:700 }}>{item.price.toLocaleString()} دج × {item.qty}</p>
                        </div>
                        <div style={{ display:"flex", gap:5, alignItems:"center" }}>
                          <button className="qb" style={{ width:28, height:28, fontSize:14 }} onClick={()=>updQty(item.id,-1)}>−</button>
                          <span style={{ fontWeight:800 }}>{item.qty}</span>
                          <button className="qb" style={{ width:28, height:28, fontSize:14 }} onClick={()=>updQty(item.id,+1)}>+</button>
                        </div>
                      </div>
                    ))}
                    <div style={{ background:"var(--gold-bg)", border:"1px solid var(--gold-l)", borderRadius:12, padding:"14px 16px", margin:"16px 0" }}>
                      <div style={{ display:"flex", justifyContent:"space-between", fontSize:16, fontWeight:900 }}>
                        <span>مجموع المنتجات:</span>
                        <span style={{ color:"var(--gold)" }}>{cartTotal.toLocaleString()} دج</span>
                      </div>
                      <p style={{ fontSize:11, color:"var(--gray)", marginTop:4, fontWeight:600 }}>+ رسوم التوصيل تُحسب في الخطوة التالية</p>
                    </div>
                    <button className="bgold" onClick={()=>setStep(2)} style={{ width:"100%", padding:14, fontSize:15 }}>
                      التالي: بيانات التوصيل ←
                    </button>
                  </div>
                )}

                {step===2 && (
                  <div style={{ padding:"16px 22px 24px" }}>
                    <div style={{ display:"grid", gap:14 }}>
                      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
                        <div><label>الاسم الكامل *</label><input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="يوسف بن علي" /></div>
                        <div><label>رقم الهاتف *</label><input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="0550 00 00 00" /></div>
                      </div>
                      <div>
                        <label>الولاية *</label>
                        <select value={form.wilaya} onChange={e=>setForm({...form,wilaya:e.target.value})}>
                          <option value="">اختر ولايتك</option>
                          {WILAYAS.map(w=><option key={w.code} value={w.name}>{w.code} — {w.name}</option>)}
                        </select>
                      </div>
                      {form.wilaya && (
                        <div>
                          <label>طريقة التوصيل *</label>
                          <div style={{ display:"flex", gap:10, marginTop:4 }}>
                            <div className={`dopt${delType==="home"?" on":""}`} onClick={()=>setDelType("home")}>
                              <div style={{ fontSize:22, marginBottom:4 }}>🏠</div>
                              <p style={{ fontSize:13, fontWeight:800, marginBottom:3 }}>للمنزل</p>
                              <p style={{ fontSize:17, fontWeight:900, color:"var(--gold)" }}>{selW?.home.toLocaleString()} دج</p>
                            </div>
                            <div className={`dopt${delType==="relay"?" on":""}`} onClick={()=>setDelType("relay")}>
                              <div style={{ fontSize:22, marginBottom:4 }}>📦</div>
                              <p style={{ fontSize:13, fontWeight:800, marginBottom:3 }}>مكتب ياليدين</p>
                              <p style={{ fontSize:17, fontWeight:900, color:"var(--gold)" }}>{selW?.relay.toLocaleString()} دج</p>
                            </div>
                          </div>
                        </div>
                      )}
                      <div><label>العنوان التفصيلي *</label><input value={form.address} onChange={e=>setForm({...form,address:e.target.value})} placeholder="البلدية، الحي، رقم الباب..." /></div>
                    </div>

                    {selW && (
                      <div style={{ background:"var(--gold-bg)", border:"1px solid var(--gold-l)", borderRadius:12, padding:"14px 16px", marginTop:18 }}>
                        <div style={{ display:"flex", justifyContent:"space-between", fontSize:13, color:"var(--gray)", marginBottom:5 }}>
                          <span>المنتجات</span><span style={{fontWeight:700}}>{cartTotal.toLocaleString()} دج</span>
                        </div>
                        <div style={{ display:"flex", justifyContent:"space-between", fontSize:13, color:"var(--gray)", marginBottom:10 }}>
                          <span>التوصيل ({delType==="home"?"منزل":"مكتب"})</span>
                          <span style={{fontWeight:700}}>{delCost.toLocaleString()} دج</span>
                        </div>
                        <div style={{ display:"flex", justifyContent:"space-between", fontSize:18, fontWeight:900, borderTop:"1.5px dashed var(--gold-l)", paddingTop:10 }}>
                          <span>الإجمالي</span><span style={{color:"var(--gold)"}}>{grandTotal.toLocaleString()} دج</span>
                        </div>
                      </div>
                    )}

                    <div style={{ display:"flex", gap:10, marginTop:16 }}>
                      <button className="bout" onClick={()=>setStep(1)} style={{ padding:"13px 18px", fontSize:14 }}>← رجوع</button>
                      <button className="bgold" onClick={handleSubmit} disabled={submitting}
                        style={{ flex:1, padding:14, fontSize:15, opacity:submitting?0.7:1 }}>
                        {submitting?"⏳ جاري الإرسال...":"تأكيد الطلب 🛍️"}
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}

      {/* ── TOAST ───────────────────────────────────────── */}
      {toast && <div className="toast">{toast}</div>}

      {/* ── FOOTER ──────────────────────────────────────── */}
      <footer style={{ background:"var(--dark)", padding:"40px 20px", textAlign:"center" }}>
        <h2 style={{ color:"var(--gold)", fontSize:22, fontWeight:900, marginBottom:6 }}>حقائب الجزائر</h2>
        <p style={{ color:"rgba(255,255,255,.35)", fontSize:12, marginBottom:18 }}>مصنوعة بحب في الجزائر 🇩🇿</p>
        <div style={{ display:"flex", justifyContent:"center", gap:20, flexWrap:"wrap", marginBottom:14 }}>
          {["🚚 شحن ياليدين","✅ دفع عند الاستلام","📞 دعم العملاء"].map(t=>(
            <span key={t} style={{ color:"rgba(255,255,255,.45)", fontSize:12, fontWeight:700 }}>{t}</span>
          ))}
        </div>
        <p style={{ color:"rgba(255,255,255,.18)", fontSize:11 }}>© 2026 حقائب الجزائر</p>
      </footer>
    </div>
  );
}
