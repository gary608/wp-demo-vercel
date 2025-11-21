import React, { useState } from 'react';
import { 
  Layout, 
  Plus, 
  Image as ImageIcon, 
  Upload, 
  CheckCircle, 
  Menu as MenuIcon, 
  FileText, 
  Home,
  MoreHorizontal,
  ChevronLeft,
  Globe,
  ChevronDown,
  LayoutTemplate,
  Pin,
  Search,
  Filter,
  ExternalLink,
  MoreVertical,
  MessageSquare,
  BarChart2,
  Zap,
  Gauge
} from 'lucide-react';

// --- Shared Components ---

const InteractionZone = ({ onClick, className, children, label, onMouseEnter, onMouseLeave }) => (
  <div 
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={`absolute border-2 border-red-500 cursor-pointer hover:bg-red-500/10 transition-all duration-300 z-20 group ${className}`}
  >
    <span className="absolute -inset-1 border-2 border-red-400 rounded-sm animate-ping opacity-75 pointer-events-none"></span>
    {label && (
      <div className="absolute -top-8 left-0 bg-red-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-sm">
        {label}
      </div>
    )}
    {children}
  </div>
);

const BrowserFrame = ({ children, url }) => (
  <div className="w-full max-w-4xl h-[600px] bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col border border-gray-200">
    <div className="bg-gray-100 border-b border-gray-200 p-2 flex items-center gap-2">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-400"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-400"></div>
      </div>
      <div className="flex-1 bg-white border border-gray-300 rounded px-3 py-1 text-xs text-gray-500 flex items-center truncate">
        <Globe size={12} className="mr-2" />
        {url}
      </div>
    </div>
    <div className="flex-1 relative bg-gray-50 overflow-hidden font-sans text-slate-800">
      {children}
    </div>
  </div>
);

// --- Steps ---

// Step 1: Global Nav - Click "Sites" (網站) under W Logo (UPDATED)
const Step1_GlobalNav = ({ nextStep }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full h-full flex flex-col bg-[#f1f1f1]">
      {/* Top Admin Bar - Dark Grey #23282d */}
      <div className="h-[46px] bg-[#23282d] flex items-center text-[#eeeeee] text-[13px] relative z-50">
        {/* W Logo & Dropdown Trigger */}
        <div 
          className="w-[46px] h-full hover:bg-[#0073aa] hover:text-white flex items-center justify-center cursor-pointer relative transition-colors group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
           {/* W Logo Icon */}
           <div className="w-6 h-6 rounded-full border-2 border-gray-400 group-hover:border-white flex items-center justify-center font-serif font-bold text-lg pt-0.5">
             W
           </div>

           {/* Hover Target for Opening Menu */}
           {!isHovered && (
             <InteractionZone 
               onClick={() => setIsHovered(true)}
               className="inset-0 border-red-500"
               label="將滑鼠移至此處"
             />
           )}

           {/* Dropdown Menu */}
           {isHovered && (
             <div className="absolute top-full left-0 w-[300px] bg-[#32373c] shadow-2xl animate-in fade-in zoom-in-95 duration-100 flex text-sm">
                {/* Menu List */}
                <div className="flex-1 py-2">
                   {/* Target Item: Sites (網站) */}
                   <div className="px-4 py-3 hover:bg-[#0073aa] hover:text-white cursor-pointer relative flex items-center group/item">
                      網站
                      {/* Tooltip from image */}
                      <div className="absolute left-full top-1 ml-2 bg-white text-gray-800 text-xs px-2 py-1 shadow-md border border-gray-200 whitespace-nowrap z-50">
                        管理你的網站
                        <div className="absolute left-0 top-1/2 -ml-1 -mt-1 w-2 h-2 bg-white transform rotate-45 border-l border-b border-gray-200"></div>
                      </div>

                      {/* Interaction Zone */}
                      <InteractionZone 
                        onClick={nextStep} 
                        className="inset-0 border-red-500"
                        label="點選 [網站]"
                      />
                   </div>
                   <div className="px-4 py-3 hover:bg-[#0073aa] hover:text-white cursor-pointer text-gray-400">
                      網域
                   </div>
                </div>
                
                {/* Upgrade Button Area */}
                <div className="w-[100px] bg-[#32373c] p-2 border-l border-gray-600 flex items-start justify-center pt-3">
                   <button className="bg-[#0073aa] text-white px-3 py-1 rounded text-xs hover:bg-[#006799]">
                     升級
                   </button>
                </div>
             </div>
           )}
        </div>

        {/* Other Top Bar Items */}
        <div className="flex items-center gap-1 px-3 h-full hover:bg-[#32373c] cursor-pointer transition-colors">
           <Home size={16} className="text-gray-400" />
           <span className="font-semibold ml-1">衞理中學家長教師會</span>
        </div>
        
        <div className="flex items-center gap-1 px-3 h-full hover:bg-[#32373c] cursor-pointer transition-colors">
           <MessageSquare size={16} className="text-gray-400" />
           <span className="ml-1 font-bold text-gray-400">0</span>
        </div>

        <div className="flex items-center gap-1 px-3 h-full hover:bg-[#32373c] cursor-pointer transition-colors">
           <Plus size={16} className="text-gray-400" />
           <span className="ml-1">新增</span>
        </div>

        <div className="ml-auto px-4">
           <div className="w-6 h-6 bg-gray-500 rounded"></div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - #1d2327 */}
        <div className="w-[160px] bg-[#1d2327] text-white flex flex-col text-[13px]">
           <div className="py-2">
              <div className="px-3 py-2 flex items-center gap-2 text-gray-300 hover:bg-[#191e23] hover:text-[#00b9eb] cursor-pointer">
                 <Gauge size={16} /> 儀表板
              </div>
              
              {/* Active Item: My Home */}
              <div className="px-3 py-2 flex items-center gap-2 bg-[#0073aa] text-white relative font-medium cursor-pointer">
                 <Home size={16} /> 我的首頁
                 {/* Triangle Pointer */}
                 <div className="absolute right-0 top-1/2 -mt-1.5 w-0 h-0 border-t-[6px] border-t-transparent border-r-[6px] border-r-[#f1f1f1] border-b-[6px] border-b-transparent"></div>
              </div>

              <div className="px-3 py-2 flex items-center justify-between text-gray-300 hover:bg-[#191e23] hover:text-[#00b9eb] cursor-pointer group">
                 <div className="flex items-center gap-2">
                   <div className="w-4 flex justify-center"><div className="w-3 h-3 border border-gray-400 rounded-sm"></div></div>
                   升級方案
                 </div>
                 <span className="text-[10px] text-gray-500 group-hover:text-[#00b9eb]">免費</span>
              </div>

              <div className="px-3 py-2 flex items-center gap-2 text-gray-300 hover:bg-[#191e23] hover:text-[#00b9eb] cursor-pointer">
                 <BarChart2 size={16} /> 統計
              </div>

              <div className="px-3 py-2 flex items-center gap-2 text-gray-300 hover:bg-[#191e23] hover:text-[#00b9eb] cursor-pointer">
                 <Zap size={16} /> Jetpack
              </div>
              
              <div className="mt-4 border-t border-[#3c434a] pt-2">
                 <div className="px-3 py-2 flex items-center gap-2 text-gray-300 hover:bg-[#191e23] hover:text-[#00b9eb] cursor-pointer">
                    <Pin size={16} className="transform rotate-45"/> 文章
                 </div>
              </div>
           </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6 bg-[#f1f1f1] overflow-y-auto">
           <div className="bg-white p-8 border border-gray-300 shadow-sm min-h-[300px]">
              <h2 className="text-2xl font-light mb-6">歡迎來到您的首頁</h2>
              <div className="grid grid-cols-2 gap-4">
                 <div className="h-32 bg-blue-50 border border-blue-100 p-4">
                    <h3 className="font-bold text-blue-800 mb-2">設定您的網站</h3>
                    <div className="h-2 bg-blue-200 w-1/2 rounded"></div>
                 </div>
                 <div className="h-32 bg-gray-50 border border-gray-100 p-4">
                    <h3 className="font-bold text-gray-700 mb-2">快速草稿</h3>
                    <div className="h-2 bg-gray-200 w-full rounded mb-2"></div>
                    <div className="h-2 bg-gray-200 w-3/4 rounded"></div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

// Step 2: Select Site (mcwpta.com) - UPDATED to match image_e1ee48.jpg
const Step2_SitePicker = ({ nextStep }) => (
  <div className="w-full h-full p-8 flex flex-col items-center justify-start bg-white overflow-y-auto">
    
    {/* Header Section */}
    <div className="w-full max-w-5xl mb-6">
       <h2 className="text-3xl font-normal text-gray-800 mb-6">網站</h2>
       
       <div className="flex items-center gap-4 mb-8">
          <div className="relative flex-1 max-w-xs">
             <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
             <input 
               type="text" 
               placeholder="搜尋" 
               className="w-full pl-10 pr-4 py-2 border border-gray-400 rounded text-gray-700 focus:outline-none focus:border-blue-600"
             />
          </div>
          <button className="p-2 border border-transparent hover:bg-gray-100 rounded">
             <Filter size={20} className="text-gray-600" />
          </button>
       </div>
    </div>
    
    {/* Sites Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
      
      {/* Left Card (Dummy) */}
      <div className="flex flex-col group opacity-60 hover:opacity-80 transition-opacity">
        <div className="border-[4px] border-gray-800 rounded-lg overflow-hidden h-48 mb-3 relative bg-white">
           <div className="p-4">
              <div className="h-4 bg-gray-200 w-3/4 mb-2"></div>
              <div className="h-20 bg-gray-100 w-full mb-2"></div>
              <div className="h-20 bg-gray-800 w-full"></div>
           </div>
        </div>
        <div className="px-1">
          <div className="flex justify-between items-start">
             <h3 className="text-lg font-normal text-gray-800 mb-1">衞理中學家長教師會</h3>
             <MoreVertical size={16} className="text-gray-500"/>
          </div>
          <div className="text-sm text-gray-500 mb-4 flex items-center gap-1">
             mcwpta.wordpress.com <ExternalLink size={10}/>
          </div>
          
          <div className="grid grid-cols-2 gap-y-2 text-xs text-gray-600">
             <div className="text-gray-500">狀態</div><div className="text-right">公開的</div>
             <div className="text-gray-500">7 天內訪客人...</div><div className="text-right">0</div>
             <div className="text-gray-500">訂閱者</div><div className="text-right">1</div>
             <div className="text-gray-500">方案</div><div className="text-right">免費</div>
          </div>
        </div>
      </div>

      {/* Middle Card (Target) - mcwpta.com */}
      <div className="flex flex-col group relative">
        {/* Thumbnail Frame */}
        <div className="border-[4px] border-gray-800 rounded-lg overflow-hidden h-48 mb-3 relative bg-white shadow-sm">
           {/* Simulated Site Preview */}
           <div className="w-full h-full flex flex-col">
              <div className="h-8 border-b flex items-center px-2 justify-between">
                 <div className="w-20 h-2 bg-gray-300 rounded"></div>
              </div>
              <div className="p-2 grid grid-cols-3 gap-1 bg-blue-50 h-full">
                 <div className="col-span-3 h-4 bg-blue-200 rounded mb-1 w-1/2"></div>
                 <div className="col-span-3 h-2 bg-gray-200 rounded mb-2 w-3/4"></div>
                 <div className="bg-gray-300 h-12 rounded"></div>
                 <div className="bg-gray-300 h-12 rounded"></div>
                 <div className="bg-gray-300 h-12 rounded"></div>
              </div>
           </div>
        </div>
        
        {/* Info Section */}
        <div className="px-1">
          <div className="flex justify-between items-start">
             <h3 className="text-lg font-normal text-gray-800 mb-1">衞理中學家長教師會</h3>
             <MoreVertical size={16} className="text-gray-500"/>
          </div>
          
          {/* Target Link */}
          <div className="inline-flex items-center gap-1 text-sm text-gray-500 mb-4 relative w-fit">
             <span className="border-b border-transparent hover:text-blue-600 hover:border-blue-600 transition-colors cursor-pointer">
               mcwpta.com
             </span> 
             <ExternalLink size={10}/>
             
             {/* Interaction Zone - Specifically on the URL */}
             <InteractionZone 
                onClick={nextStep} 
                className="-inset-2 border-2 border-red-500"
                label="點選 [mcwpta.com]"
             />
          </div>
          
          <div className="grid grid-cols-2 gap-y-2 text-xs text-gray-600">
             <div className="text-gray-500">狀態</div><div className="text-right">公開的</div>
             <div className="text-gray-500">7 天內訪客人...</div><div className="text-right">24</div>
             <div className="text-gray-500">訂閱者</div><div className="text-right">1</div>
             <div className="text-gray-500">方案</div><div className="text-right">進階版方案</div>
          </div>
        </div>
      </div>

      {/* Right Card (Dummy) */}
      <div className="flex flex-col group opacity-60 hover:opacity-80 transition-opacity">
        <div className="border-[4px] border-gray-800 rounded-lg overflow-hidden h-48 mb-3 relative bg-white">
           <div className="p-4">
              <div className="h-4 bg-gray-200 w-1/2 mb-2"></div>
              <div className="h-20 bg-gray-100 w-full mb-2"></div>
              <div className="h-20 bg-gray-800 w-full"></div>
           </div>
        </div>
        <div className="px-1">
          <div className="flex justify-between items-start">
             <h3 className="text-lg font-normal text-gray-800 mb-1">PTA 家長教師會</h3>
             <MoreVertical size={16} className="text-gray-500"/>
          </div>
          <div className="text-sm text-gray-500 mb-4 flex items-center gap-1">
             mcwptacom.wordpress.com <ExternalLink size={10}/>
          </div>
          
          <div className="grid grid-cols-2 gap-y-2 text-xs text-gray-600">
             <div className="text-gray-500">狀態</div><div className="text-right">公開的</div>
             <div className="text-gray-500">7 天內訪客人...</div><div className="text-right">0</div>
             <div className="text-gray-500">訂閱者</div><div className="text-right">1</div>
             <div className="text-gray-500">方案</div><div className="text-right">免費</div>
          </div>
        </div>
      </div>

    </div>
  </div>
);

// Step 3: Admin Bar Hover -> Menu (選單)
const Step3_AdminBar = ({ nextStep }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full h-full bg-[#f0f0f1] flex flex-col">
      {/* Admin Bar */}
      <div className="h-10 bg-[#1d2327] text-white flex items-center px-4 text-sm relative z-50">
        <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center mr-3 text-[10px]">W</div>
        
        {/* Site Title Dropdown Trigger */}
        <div 
          className="flex items-center gap-2 cursor-pointer px-2 py-1 hover:bg-[#2271b1] relative transition-colors"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Home size={14} />
          <span className="font-bold">衞理中學家長教師會</span>
          
          {/* Hover Target Box */}
          {!isHovered && (
             <InteractionZone 
               onClick={() => setIsHovered(true)}
               className="inset-0 border-red-500"
               label="將滑鼠移至此處"
             />
          )}

          {/* Dropdown Menu */}
          {isHovered && (
            <div className="absolute top-full left-0 w-48 bg-[#1d2327] shadow-xl text-gray-300 py-2 animate-in fade-in zoom-in-95 duration-150 border-t border-gray-700">
               <div className="px-4 py-2 hover:bg-[#2271b1] hover:text-white cursor-pointer">儀表板</div>
               <div className="px-4 py-2 hover:bg-[#2271b1] hover:text-white cursor-pointer">佈景主題</div>
               <div className="px-4 py-2 bg-[#2271b1] text-white cursor-pointer relative flex justify-between items-center">
                 選單 (Menus)
                 <InteractionZone 
                    onClick={nextStep} 
                    className="inset-0" 
                    label="點選 [選單]"
                 />
               </div>
               <div className="px-4 py-2 hover:bg-[#2271b1] hover:text-white cursor-pointer">小工具</div>
            </div>
          )}
        </div>

        <div className="ml-4 flex items-center gap-1 px-2 py-1 hover:bg-[#1d2327]">
           <Plus size={14} />
           <span>新增</span>
        </div>
      </div>

      {/* Frontend Preview Content */}
      <div className="flex-1 bg-white overflow-y-auto">
         <div className="max-w-4xl mx-auto mt-8 p-8 border-t-4 border-blue-900">
            <h1 className="text-4xl font-serif text-blue-900 mb-2">衞理中學家長教師會</h1>
            <p className="text-gray-500 mb-8">HOME-SCHOOL PARENT TEACHER ASSOCIATION</p>
            <div className="h-64 bg-gray-200 mb-8 rounded"></div>
            <h2 className="text-2xl font-serif mb-4">最新消息</h2>
            <div className="space-y-4">
               <div className="h-4 bg-gray-100 w-3/4"></div>
               <div className="h-4 bg-gray-100 w-full"></div>
               <div className="h-4 bg-gray-100 w-5/6"></div>
            </div>
         </div>
      </div>
    </div>
  );
};

// Step 4: Sidebar -> Posts -> Add New (UPDATED STYLE)
const Step4_Sidebar = ({ nextStep }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full h-full flex bg-[#f0f0f1]">
      {/* Sidebar - Dark Style Matching User Image */}
      <div className="w-48 bg-[#1d2327] text-[#f0f0f1] flex flex-col pt-4 text-[13px] font-sans relative">
        
        {/* Dashboard */}
        <div className="px-3 py-2 hover:bg-[#2271b1] hover:text-white flex items-center gap-2 group cursor-pointer text-gray-300">
          <div className="w-5 flex justify-center"><Gauge size={18} className="text-gray-400 group-hover:text-white"/></div>
          儀表板
        </div>
        
        <div className="px-3 py-2 hover:bg-[#2271b1] hover:text-white flex items-center gap-2 group cursor-pointer text-gray-300">
           <div className="w-5 flex justify-center"><Home size={18} className="text-gray-400 group-hover:text-white"/></div>
           我的首頁
        </div>

        <div className="px-3 py-2 hover:bg-[#2271b1] hover:text-white flex items-center gap-2 group cursor-pointer text-gray-300">
           <div className="w-5 flex justify-center"><BarChart2 size={18} className="text-gray-400 group-hover:text-white"/></div>
           統計
        </div>

        <div className="my-2 h-[1px] bg-[#3c434a]"></div>

        {/* Target: Posts (文章) */}
        <div 
          className={`px-3 py-2 flex items-center gap-2 cursor-pointer relative transition-colors ${expanded ? 'bg-[#2271b1] text-white' : 'hover:bg-[#2271b1] hover:text-white text-gray-300'}`}
          onClick={() => setExpanded(true)}
        >
           <div className="w-5 flex justify-center relative">
              {/* Pin Icon */}
              <Pin size={18} className={`transform rotate-45 ${expanded ? 'text-white' : 'text-gray-400'}`}/> 
           </div>
           <span className="flex-1 font-medium">文章</span>
           
           {/* Interaction Zone 1: Expand Menu (Only if not expanded) */}
           {!expanded && (
             <InteractionZone 
               onClick={() => setExpanded(true)}
               className="inset-0 border-red-500"
               label="點擊 [文章]"
             />
           )}
           
           {expanded && <div className="absolute right-2 text-[10px]">▼</div>}
        </div>

        {/* Submenu - Expanded state */}
        {expanded && (
          <div className="bg-[#101517] py-2 animate-in fade-in slide-in-from-top-1 duration-200">
            <div className="pl-10 pr-3 py-1.5 text-gray-400 hover:text-[#2271b1] cursor-pointer transition-colors">全部文章</div>
            
            {/* Target: Add New (新增文章) */}
            <div className="pl-10 pr-3 py-1.5 text-[#2271b1] cursor-pointer relative font-medium flex items-center group">
               {/* Blue vertical bar on left */}
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2271b1]"></div>
               新增文章
               
               {/* Interaction Zone 2: Next Step */}
               <InteractionZone 
                  onClick={nextStep} 
                  className="inset-0"
                  label="點擊 [新增文章]"
               />
            </div>
            
            <div className="pl-10 pr-3 py-1.5 text-gray-400 hover:text-[#2271b1] cursor-pointer transition-colors">分類</div>
            <div className="pl-10 pr-3 py-1.5 text-gray-400 hover:text-[#2271b1] cursor-pointer transition-colors">標籤</div>
          </div>
        )}

        <div className="px-3 py-2 hover:bg-[#2271b1] hover:text-white flex items-center gap-2 group cursor-pointer text-gray-300 transition-colors">
           <div className="w-5 flex justify-center"><ImageIcon size={18} className="text-gray-400 group-hover:text-white"/></div>
           媒體
        </div>
        <div className="px-3 py-2 hover:bg-[#2271b1] hover:text-white flex items-center gap-2 group cursor-pointer text-gray-300 transition-colors">
           <div className="w-5 flex justify-center"><FileText size={18} className="text-gray-400 group-hover:text-white"/></div>
           頁面
        </div>
        
        <div className="flex items-center px-3 py-2 text-white text-xs mt-4">
           <span className="w-5 flex justify-center"><div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-[10px]">1</div></span>
           <span>留言</span>
        </div>
      </div>

      {/* Main Content Placeholder */}
      <div className="flex-1 p-8 bg-[#f0f0f1]">
         <h1 className="text-2xl font-medium text-gray-800 mb-4">文章</h1>
         <div className="bg-white border border-gray-300 shadow-sm p-4 h-auto min-h-[200px]">
             <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-4">
                <div className="flex gap-4 text-sm">
                   <span className="text-black font-bold">全部 (5)</span>
                   <span className="text-blue-600">已發佈 (5)</span>
                </div>
                <div className="border border-blue-600 text-blue-600 px-3 py-1 text-sm rounded font-medium">搜尋文章</div>
             </div>
             {/* Dummy list */}
             <div className="space-y-3 opacity-50">
                {[1,2,3].map(i => (
                   <div key={i} className="h-10 bg-gray-50 border border-gray-100 rounded"></div>
                ))}
             </div>
         </div>
      </div>
    </div>
  );
};

// Step 5: Editor -> Click (+)
const Step5_EditorInit = ({ nextStep }) => (
  <div className="w-full h-full bg-white flex flex-col">
    <div className="h-14 border-b border-gray-200 flex items-center px-4 justify-between bg-white">
       <div className="flex items-center gap-4">
         <div className="w-8 h-8 bg-[#1e1e1e] text-white rounded flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors relative">
            <Plus size={20} />
         </div>
       </div>
       <div className="text-sm font-medium text-gray-500">草稿 - 自動儲存</div>
       <div className="px-4 py-1.5 text-sm bg-blue-600 text-white rounded font-medium">發佈</div>
    </div>

    <div className="flex-1 max-w-3xl mx-auto w-full pt-12 px-12 relative">
       <input 
         type="text" 
         placeholder="新增標題" 
         className="w-full text-4xl font-serif text-gray-800 mb-8 placeholder-gray-300 border-none outline-none focus:ring-0 p-0"
         readOnly
       />
       
       <div className="group relative min-h-[100px]">
         <p className="text-lg text-gray-400 font-serif border-l-2 border-transparent focus:border-black pl-0">
           開始輸入或輸入 / 以選擇區塊
         </p>

         {/* Floating Inserter Button */}
         <div className="absolute -right-12 top-0">
           <div className="p-2 bg-gray-100 rounded hover:bg-gray-200 border border-gray-300 cursor-pointer relative">
              <Plus size={20} className="text-gray-700" />
              <InteractionZone 
                onClick={nextStep} 
                className="-inset-1 rounded" 
                label="點擊新增區塊"
              />
           </div>
         </div>
       </div>
    </div>
  </div>
);

// Step 6: Select Slideshow Block (UPDATED)
const Step6_BlockSelect = ({ nextStep }) => (
  <div className="w-full h-full bg-white flex flex-col relative">
    <div className="h-14 border-b border-gray-200 flex items-center px-4 justify-between bg-white opacity-50">
       <div className="p-1.5 bg-black text-white rounded"><Plus size={20} /></div>
    </div>

    <div className="flex-1 max-w-3xl mx-auto w-full pt-12 px-12 relative">
       <h1 className="text-4xl font-serif text-gray-800 mb-8">校園生活剪影</h1>
       
       {/* Block Inserter Popover */}
       <div className="absolute top-12 -left-4 bg-[#1e1e1e] text-white rounded-lg shadow-2xl w-80 p-3 z-50 animate-in fade-in slide-in-from-left-2">
          <div className="p-2 border-b border-gray-700 mb-2">
            <input type="text" placeholder="搜尋區塊" className="bg-[#2d2d2d] text-white text-sm w-full px-3 py-2 rounded border border-gray-600 focus:border-blue-500 outline-none" />
          </div>
          
          <div className="overflow-y-auto h-64 pr-1">
             <div className="text-[10px] text-gray-400 uppercase font-bold px-2 py-2">媒體</div>
             <div className="grid grid-cols-3 gap-2 p-1">
                
                {/* Image Option (No interaction now) */}
                <div className="flex flex-col items-center justify-center p-2 rounded hover:bg-gray-700 cursor-pointer group relative aspect-square transition-colors bg-white/5 opacity-70">
                   <ImageIcon size={24} className="mb-2 text-gray-300" />
                   <span className="text-[11px] text-center leading-tight">圖片</span>
                </div>

                {/* Slideshow Option (Target) */}
                <div className="flex flex-col items-center justify-center p-2 rounded hover:bg-blue-600 cursor-pointer aspect-square bg-white/5 relative group">
                   <LayoutTemplate size={24} className="mb-2 text-gray-300 group-hover:text-white" />
                   <span className="text-[11px] text-center leading-tight">投影片</span>
                   
                   {/* Target Zone */}
                   <InteractionZone 
                     onClick={nextStep} 
                     className="inset-0 rounded border-white" 
                     label="選擇 [投影片]" 
                   />
                </div>
                
                <div className="flex flex-col items-center justify-center p-2 rounded hover:bg-gray-700 cursor-pointer aspect-square bg-white/5 opacity-50">
                   <div className="w-6 h-6 border-2 border-gray-400 rounded mb-2"></div>
                   <span className="text-[11px] text-center leading-tight">圖庫</span>
                </div>
             </div>
          </div>
       </div>
    </div>
  </div>
);

// Step 7: Upload Button (Updated Context for Slideshow)
const Step7_Upload = ({ nextStep }) => (
  <div className="w-full h-full bg-white flex flex-col relative">
    <div className="h-14 border-b border-gray-200 flex items-center px-4 justify-between bg-white">
       <div className="p-1.5 hover:bg-gray-100 rounded"><Plus size={20} /></div>
    </div>

    <div className="flex-1 max-w-3xl mx-auto w-full pt-12 px-12">
       <h1 className="text-4xl font-serif text-gray-800 mb-8">校園生活剪影</h1>
       
       {/* The Block (Now Slideshow style) */}
       <div className="w-full bg-gray-50 border border-gray-200 rounded overflow-hidden relative shadow-sm">
          <div className="p-8 flex flex-col items-center justify-center text-center gap-4 min-h-[200px]">
             <div className="bg-gray-200 p-4 rounded-full">
                <LayoutTemplate size={32} className="text-gray-500" />
             </div>
             <div className="space-y-1">
               <h3 className="text-gray-900 font-medium">投影片</h3>
               <p className="text-sm text-gray-500">上傳圖片檔以建立投影片展示。</p>
             </div>
             
             <div className="flex gap-3 mt-2">
                <button className="bg-blue-600 text-white px-5 py-2 rounded font-medium hover:bg-blue-700 relative shadow-sm">
                   上傳
                   <InteractionZone 
                     onClick={nextStep} 
                     className="-inset-2 rounded"
                     label="點擊 [上傳]"
                   />
                </button>
                <button className="text-blue-600 hover:underline bg-white border border-blue-600/30 px-4 py-2 rounded font-medium">媒體庫</button>
             </div>
          </div>
       </div>
    </div>
  </div>
);

// Completion
const Step8_Done = ({ reset }) => (
  <div className="w-full h-full bg-white flex flex-col items-center justify-center relative animate-in fade-in duration-500">
    <div className="bg-green-50 p-10 rounded-3xl flex flex-col items-center text-center max-w-md shadow-lg border border-green-100">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
         <CheckCircle size={32} className="text-green-600" />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">預覽完成！</h2>
      <p className="text-gray-600 mb-8 leading-relaxed">
        您已成功將投影片上傳至頁面中。<br/>點擊下方按鈕可重新複習流程。
      </p>
      
      <div className="relative w-full aspect-video bg-gray-800 rounded-lg overflow-hidden mb-6 shadow-md group cursor-default">
         {/* Simple Slideshow Simulation */}
         <div className="absolute inset-0 flex">
            <div className="w-1/2 bg-gray-700"></div>
            <div className="w-1/2 bg-gray-600"></div>
         </div>
         <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-serif text-xl tracking-widest drop-shadow-md">校園生活剪影</span>
         </div>
      </div>

      <button 
        onClick={reset}
        className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-black transition-all hover:scale-105 flex items-center gap-2 shadow-xl"
      >
        <ChevronLeft size={18} /> 重新播放
      </button>
    </div>
  </div>
);

export default function App() {
  const [step, setStep] = useState(0);

  const steps = [
    { 
      id: 1, 
      title: "1. 選擇網站 (Sites)", 
      instruction: "將滑鼠移到左上角的 wordpress LOGO 上，點擊下拉選單中的「網站」。", 
      url: "https://wordpress.com/home",
      component: Step1_GlobalNav 
    },
    { 
      id: 2, 
      title: "2. 選擇目標網站", 
      instruction: "在網站列表中，點選中間「衞理中學家長教師會」卡片下方的網址 (mcwpta.com)。", 
      url: "https://wordpress.com/sites",
      component: Step2_SitePicker 
    },
    { 
      id: 3, 
      title: "3. 進入選單 (Menus)", 
      instruction: "將滑鼠移到左上角的網站標題「衞理中學家長教師會」，然後點選「選單」。", 
      url: "https://mcwpta.wordpress.com",
      component: Step3_AdminBar 
    },
    { 
      id: 4, 
      title: "4. 新增文章", 
      instruction: "滑鼠移到左側選單的「文章」以展開選單，然後點擊「新增文章」。", 
      url: "https://wordpress.com/posts/mcwpta.wordpress.com",
      component: Step4_Sidebar 
    },
    { 
      id: 5, 
      title: "5. 新增區塊", 
      instruction: "在編輯器頁面中，點擊右側的「+」號按鈕。", 
      url: "https://wordpress.com/post/new",
      component: Step5_EditorInit 
    },
    { 
      id: 6, 
      title: "6. 選擇投影片", 
      instruction: "在區塊選單中，選擇「投影片」功能。", 
      url: "https://wordpress.com/post/new",
      component: Step6_BlockSelect 
    },
    { 
      id: 7, 
      title: "7. 上傳照片", 
      instruction: "點擊藍色的「上傳」按鈕。", 
      url: "https://wordpress.com/post/new",
      component: Step7_Upload 
    },
    { 
      id: 8, 
      title: "完成", 
      instruction: "恭喜！您已完成上傳流程。", 
      url: "https://wordpress.com/post/success",
      component: Step8_Done 
    }
  ];

  const CurrentComponent = steps[step].component;

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8 font-sans text-slate-800 flex flex-col items-center">
      
      {/* Header Area */}
      <header className="w-full max-w-4xl mb-6 text-center">
        <h1 className="text-3xl font-bold text-[#2c3338] mb-2 flex items-center justify-center gap-3">
           <div className="w-8 h-8 bg-[#0073aa] text-white rounded-full flex items-center justify-center font-serif font-bold">W</div>
           WordPress 操作教學
        </h1>
        <p className="text-slate-500">請依照畫面中的紅色框線提示進行操作</p>
      </header>

      {/* Progress */}
      <div className="w-full max-w-4xl mb-4">
         <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">
           <span>Start</span>
           <span>Finish</span>
         </div>
         <div className="h-2 bg-gray-200 rounded-full overflow-hidden flex">
            {steps.map((s, i) => (
              <div 
                key={i}
                className={`h-full transition-all duration-300 border-r border-white/20 ${i <= step ? 'bg-[#0073aa]' : 'bg-transparent'}`}
                style={{ width: `${100 / steps.length}%` }}
              />
            ))}
         </div>
      </div>

      {/* Instruction Box */}
      <div className="w-full max-w-4xl bg-white p-5 rounded-lg shadow-lg border-l-4 border-[#0073aa] mb-6 flex items-start gap-4 animate-fade-in relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-gray-100 to-transparent"></div>
        <div className="bg-blue-50 text-[#0073aa] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
           {step + 1}
        </div>
        <div>
          <h3 className="font-bold text-lg text-gray-800 mb-1">{steps[step].title}</h3>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">{steps[step].instruction}</p>
        </div>
      </div>

      {/* Interactive Browser Frame */}
      <BrowserFrame url={steps[step].url}>
        <CurrentComponent 
          nextStep={() => setStep(prev => Math.min(prev + 1, steps.length - 1))} 
          reset={() => setStep(0)}
        />
      </BrowserFrame>

      <footer className="mt-8 text-slate-400 text-xs text-center">
        互動式 SVG 模擬器 | 2024 WordPress Demo
      </footer>
    </div>
  );
}